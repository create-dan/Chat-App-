import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import Chatbox from "../components/Chatbox";



const ChatPage = () => {
  const { user } = ChatState();
  // console.log(ChatState());

  return (
    <>
      <div style={{ width: "100%" }}>
        {user && <SideDrawer />}
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          {user && <MyChats />}
          {user && <Chatbox />}
        </Box>
      </div>
    </>
  );
};

export default ChatPage;
