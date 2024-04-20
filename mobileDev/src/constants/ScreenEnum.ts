import { Dimensions } from "react-native";

export enum ScreenEnum {
    WIDTH = Dimensions.get('screen').width,
    HEIGHT = Dimensions.get('screen').height,
    TABLET_WIDTH = 768
}

export enum OrientationEnum {
    LANDSCAPE = 'LANDSCAPE',
    PORTRAIT = 'PORTRAIT'
}

export enum BugReportUrl {
    URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe8737IdWPKVxgcoiUTeivApa9T6S4bEa6daJWQ7fm7WUV4Ew/viewform?usp=sf_link'
}

export enum LayoutEnum {
    ACTIVE_TAB = "#3F535F",
    OFFLINE_ICON_CLR = "#9EB4C0",
    LOGO_FIRST_CLR = '#356580',
    MODAL_TEXT_CLR = '#393939',
    LOGO_SECOND_CLR = '#30bcb1',
    FONT_CLR = '#333333',
    FONT_HEAD_CLR = '#7390A0',
    FONT_SECOND_CLR = '#727272',
    FONT_THIRD_CLR = '#7390A0',
    FONT_FILTER_CLR = '#3990F7',
    LABEL_CLR = '#2D2D2D',
    ICON_CLR = '#2D2D2D',
    BUTTON_CLR = '#346580',
    BORDER_CLR = '#CACED5',
    FONT_WHT_CLR = '#FFFFFF',
    FONT_BLACK_CLR = '#13100D',
    INPUT_BORDER_CLR = '#E8E9E9',
    BACKGROUND_CLR = '#FFFFFF',
    ERROR_CLR = '#FF0000',
    FORGOT_BTN_CLR = "#396680",
    BUTTON_CLR_DIS = '#9695AD',
    LOGIN_BTN_DIS = '#9C9B9D',
    TEXT_ICON_CLR = '#4b4e50',
    FILTER_SELECTION_CLR = '#B2B2B2',
    BADGE_BLUE_BG_CLR = '#F0F8FD',
    BADGE_BLUE_FACE_CLR = '#146CD3',
    BADGE_GREEN_BG_CLR = '#ECFCF3',
    BADGE_BROWN_BG_CLR = '#FFE3B0',
    BADGE_BROWN_FACE_CLR = '#CC7C00',
    BADGE_GREEN_FACE_CLR = '#169A5B',
    BADGE_FILTER_BG_CLR = '#FBFBFB',
    BADGE_FILTER_FACE_CLR = '#4B4E50',
    BADGE_FILTER_BORDER_CLR = '#F4F4F4',
    BADGE_WI_FIRST_BG_CLR = '#F4F4F4',
    BADGE_WI_FIRST_FACE_CLR = '#4B4E50',
    BADGE_WI_FIRST_BORDER_CLR = '#F4F4F4',
    BADGE_WI_SECOND_BG_CLR = '#F0F8FD',
    BADGE_WI_SECOND_FACE_CLR = '#146CD3',
    BADGE_WI_SECOND_BORDER_CLR = '#F0F8FD',
    BADGE_WI_THIRD_BG_CLR = '#ECFCF3',
    BADGE_WI_THIRD_FACE_CLR = '#169A5B',
    BADGE_WI_THIRD_BORDER_CLR = '#ECFCF3',
    BADGE_ACTIVE_BG_CLR = '#EDFAFB',
    BADGE_ACTIVE_FACE_CLR = '#30BCB1',
    BADGE_ACTIVE_BORDER_CLR = '#30BCB1',
    CALL_FRST_CLR = '#EE152F',
    TIME_CLR = '#547283',
    ROUND_ACTIVE = '#74DAD2',
    DATE_CLR = '#9EB4C0',
    PRI_NUM_CLR = '#727272',
    HIGHLIGHT_CLR = '#F8F9FA',
    TOAST_MESSAGE = '#547283',
    ASSIGN_BTN_BDR_CLR = '#D7D7D8',
    FORM_BCK_BTN = '#D7D7D8',
    CALENDAR_BDR_CLR = '#CEE7F4',
    CALENDAR_OTR_BR = 'FFF',
    CALENDAR_INR_CLR = '#F6FCFF',
    SLOT_CLR = '#62A2C5',
    LOGO_PR_SHADE = '#27A097',
    OTHER_POLYLINE_CLR = '#9EB4C0',
    POLYLINE_CLR = '#46A5AA',
    PROJECT_NBR = '#417B9B',
    TEXT_INPUT_HEADER = '#49454F',
}

export enum ProximaNova {
    LIGHT = 'proximanova-light',
    SEMIBOLD = 'proximanova-semibold',
    REGULAR = 'proximanova-regular',
    EXTRABOLD = 'proximanova-bold',
}

export enum Blair {
    BOLD = 'blair-itc-bold',
    LIGHT = 'blair-itc-light',
    MEDIUM = 'blair-itc-medium'
}

export enum AvatarColor {
    '#30BCB1',
    '#27A097',
    '#7147BC',
    '#307FE2',
    '#DB7124',
    '#D0A500',
    '#F4F4F4'
}