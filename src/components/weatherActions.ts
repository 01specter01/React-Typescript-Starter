import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
    WeatherAction,
    WeatherData,
    WeatherError,
    GET_WEATHER,
    SET_LOADING,
    SET_ERROR,
} from "../store/types";

export const getWeather = (
    city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
    return async (dispatch) => {
        try {
            const res = await fetch();
        } catch (error) {}
    };
};
