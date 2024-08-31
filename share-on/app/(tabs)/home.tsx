import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Line, Path, Polyline, Rect } from "react-native-svg";

export default function Component() {
  return (
    <SafeAreaView className="flex flex-col h-screen bg-background bg-[#f3f9ff]">
      <View className="flex-row justify-between items-center px-4 py-3 shadow">
        <View className="flex-row items-center">
          <ShareIcon />
          <Text className="text-xl font-bold text-gray-800">Share-On</Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity className="p-2">
            <SettingsIcon />
          </TouchableOpacity>
          <Avatar />
        </View>
      </View>
      <ScrollView className="flex">
        <Post
          userName="John Doe"
          timeAgo="Just now"
          postText="Feeling great!"
        />
        <Post
          userName="Jane Smith"
          timeAgo="1 hour ago"
          postText="Feeling productive!"
        />
        <Post
          userName="Alex Johnson"
          timeAgo="3 hours ago"
          postText="Feeling relaxed."
        />
      </ScrollView>
      <View className="flex-row justify-between items-center p-4 bg-white shadow-md">
        <TouchableOpacity className="p-2">
          <HomeIcon  />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <CalendarIcon  />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <UserIcon  />
        </TouchableOpacity>
      </View>
    </SafeAreaView> 
  );
}

function Post({ userName, timeAgo, postText }) {
  return (
    <View className="bg-[#f0f7ff] rounded-lg mx-4 my-2 p-4 shadow-md shadow-black border border-gray-300">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Avatar />
          <View className="ml-2">
            <Text className="text-base font-semibold text-gray-800">{userName}</Text>
            <Text className="text-xs text-gray-600">{timeAgo}</Text>
          </View>
        </View>
        <TouchableOpacity className="p-2">
          <MoveHorizontalIcon />
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/images/placeholder.png')} className="w-full h-48 rounded-lg my-3" />

      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center">
          <TouchableOpacity className="p-2">
            <HeartIcon />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <MessageCircleIcon />
          </TouchableOpacity>
          <TouchableOpacity className="p-2">
            <ShareIcon />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center">
          <MoonIcon />
          <Text className="text-sm text-gray-600 ml-2">{postText}</Text>
        </View>
      </View>
    </View>
  );
}

function Avatar() {
  return (
    <View className="w-10 h-10 rounded-full border border-gray-300 flex justify-center items-center overflow-hidden">
      <Image
        source={require('../../assets/images/placeholder-user.jpg')}
        className="w-full h-full"
      />
      {/* <Text className="absolute text-gray-500">JD</Text> */}
    </View>
  );
}


// Add the other icons similarly...

function CalendarIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M8 2v4" />
        <Path d="M16 2v4" />
        <Rect width="18" height="18" x="3" y="4" rx="2" />
        <Path d="M3 10h18" />
      </Svg>
    )
  }
  
  
  function HeartIcon(props) {
    return (
        <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        color={"black"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </Svg>
    )
  }
  
  
  function HomeIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Polyline points="9 22 9 12 15 12 15 22" />
      </Svg>
    )
  }
  
  
  function MessageCircleIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </Svg>
    )
  }
  
  
  function MoonIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </Svg>
    )
  }
  
  
  function MoveHorizontalIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Polyline points="18 8 22 12 18 16" />
        <Polyline points="6 8 2 12 6 16" />
        <Line x1="2" x2="22" y1="12" y2="12" />
      </Svg>
    )
  }
  
  
  function SettingsIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <Circle cx="12" cy="12" r="3" />
      </Svg>
    )
  }
  
  
  function ShareIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <Polyline points="16 6 12 2 8 6" />
        <Line x1="12" x2="12" y1="2" y2="15" />
      </Svg>
    )
  }
  
  
  function UserIcon(props) {
    return (
        <Svg
        color={"black"}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <Circle cx="12" cy="7" r="4" />
      </Svg>
    )
  }
