import React, { useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { DataStore, Hub } from "aws-amplify"
import { Post, PostStatus } from "../../../src/models"
import { Button, Header, Screen, Text, Wallpaper, AutoImage as Image } from "../../components"
import { color, spacing, typography } from "../../theme"
const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
  marginBottom: 10,
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}
const ALMOST: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 26,
  fontStyle: "italic",
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 343,
  height: 230,
}
const CONTENT: TextStyle = {
  ...TEXT,
  color: "#BAB6C8",
  fontSize: 15,
  lineHeight: 22,
  marginBottom: spacing[5],
}
const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
  marginVertical: 5,
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

const STATUS_STYLE = { marginBottom: 5 }

export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = async () => {
    try {
      await DataStore.save(
        new Post({
          title: "My First Post",
          post_status: PostStatus.PUBLISHED,
          content: "First Post content",
        }),
      ).catch((err) => console.log("DataStore.save err", err))

      console.log("sweet, done!")
      Alert.alert("Post added")

      // const posts = await DataStore.query(Post)
      // console.log("Posts", JSON.stringify(posts, null, 2))
    } catch (error) {
      console.log("Posts Error", error)
    }
  }

  const forceSync = () => {
    DataStore.start()
  }

  const clearDataStore = () => {
    DataStore.clear()
    Alert.alert("DataStore cleared")
  }

  enum STATUS {
    PENDING,
    ONGOING,
    COMPLETE,
  }
  const [status, setStatus] = useState<STATUS>(null)
  const [log, setLog] = useState(null)

  useEffect(() => {
    const listener = Hub.listen("datastore", (hubData) => {
      console.log(hubData)
      setLog(hubData)
      const { event, data } = hubData.payload
      switch (event) {
        case "syncQueriesStarted":
          setStatus(STATUS.ONGOING)
          break

        case "outboxStatus":
          setStatus(data.isEmpty ? STATUS.COMPLETE : STATUS.PENDING)
          break

        default:
          break
      }
    })
    return () => {
      Hub.remove("datastore", listener)
    }
  }, [])

  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="AppSync + Lambda Demo" />
        </Text>
        <Text style={STATUS_STYLE}>STATUS: {STATUS[status]}</Text>
        <Text>LOG: {JSON.stringify(log, null, 2)}</Text>
      </Screen>
      <SafeAreaView style={FOOTER}>
        <View style={FOOTER_CONTENT}>
          <Button
            testID="next-screen-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            text="Add Post"
            onPress={nextScreen}
          />
          <Button
            testID="force-sync-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            text="Force Sync"
            onPress={forceSync}
          />
          <Button
            testID="clear-datastore-button"
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            text="Clear DataStore"
            onPress={clearDataStore}
          />
        </View>
      </SafeAreaView>
    </View>
  )
})
