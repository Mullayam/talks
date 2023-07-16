import React from "react";
import { TabContent, TabPane } from "reactstrap";

// hooks
import { useRedux } from "../../hooks/index";

// constants
import { TABS } from "../../constants/index";

// component
import Profile from "./Profile/index";
import Chats from "./Chats/index";
import Contacts from "./Contacts/index";
import Calls from "./Calls/index";
import Bookmark from "./Bookmark/index";
import Settings from "./Settings/index";

interface LeftbarProps {}
const Leftbar = (props: LeftbarProps) => {
  // global store
  const { useAppSelector } = useRedux();

  const { activeTab } = useAppSelector(state => ({
    activeTab: state.Layout.activeTab,
  }));

  return (
    <>
      {/* start chat-leftsidebar */}
      <div className="chat-leftsidebar">
        <TabContent activeTab={activeTab}>
          {/* Start Profile tab-pane */}
          <TabPane
            tabId={TABS.USERS}
            role="tabpanel"
          >
            <Profile />
          </TabPane>

          <TabPane
            tabId={TABS.CHAT}
            role="tabpanel"
          >
            <Chats />
          </TabPane>

          <TabPane
            tabId={TABS.CONTACTS}
            role="tabpanel"
          >
            <Contacts />
          </TabPane>

          <TabPane
            tabId={TABS.CALLS}
            role="tabpanel"
          >
            <Calls />
          </TabPane>

          <TabPane
            tabId={TABS.BOOKMARK}
            role="tabpanel"
          >
            <Bookmark />
          </TabPane>

          <TabPane
            tabId={TABS.SETTINGS}
            role="tabpanel"
          >
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Leftbar;
