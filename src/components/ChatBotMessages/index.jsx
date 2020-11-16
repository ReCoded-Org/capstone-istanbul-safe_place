import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import womanBot from "./images/woman.svg";
import womanSeeksHelp from "./images/womanSeeksHelp.svg";
import "./index.scss";
import { Redirect } from "react-router-dom";

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff",
};

const GoToSearchHelpPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("chatBotMessages.goToSeekHelpPageText")}</p>
      <Redirect to="/seekhelp" />
    </div>
  );
};

const GoToOpportunitiesPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("chatBotMessages.goToOpportunitiesPageText")}</p>
      <Redirect to="/opportunities" />
    </div>
  );
};

const GoToBlogPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("chatBotMessages.goToBlogPageText")}</p>
      <Redirect to="/blog" />
    </div>
  );
};

const ChatBotMessages = () => {
  const { t } = useTranslation();

  // You can find chatbot documentation here https://lucasbassetti.com.br/react-simple-chatbot/#/
  const steps = [
    {
      id: "1",
      message: t("chatBotMessages.welcomeMessage"),
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: t("chatBotMessages.helpLabel"), trigger: "3" },
        { value: 2, label: t("chatBotMessages.findLabel"), trigger: "4" },
        { value: 3, label: t("chatBotMessages.blogLabel"), trigger: "5" },
        {
          value: 4,
          label: t("chatBotMessages.opportunityLabel"),
          trigger: "6",
        },
      ],
    },
    {
      id: "3",
      component: (
        <div>
          <p>
            {t("chatBotMessages.immediateHelpMessagePt1")}
            <a href="tel:+1123-456-7890"> 123-456-7890 </a>
            {t("chatBotMessages.immediateHelpMessagePt2")}
          </p>
        </div>
      ),
      asMessage: true,
      trigger: 2,
    },
    {
      id: "4",
      component: <GoToSearchHelpPage />,
      asMessage: true,
      trigger: 2,
    },
    {
      id: "5",
      component: <GoToOpportunitiesPage />,
      asMessage: true,
      trigger: 2,
    },
    {
      id: "6",
      component: <GoToBlogPage />,
      asMessage: true,
      trigger: 2,
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
          headerTitle={t("chatBotMessages.headerTitle")}
          steps={steps}
          floating={true}
          botAvatar={womanBot}
          userAvatar={womanSeeksHelp}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBotMessages;
