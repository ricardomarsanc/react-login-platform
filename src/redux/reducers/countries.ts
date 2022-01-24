import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CountryDataObj } from "../../services/CountryService";
import CountryService from "../../services/CountryService";

export interface CountryData {
  countryInfo: any[] | undefined;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const getCountryData = createAsyncThunk(
  "getCountryData",
  async (dataObj: CountryDataObj) => {
    const response = await CountryService.getCountry(dataObj);
    return response.data;
  }
);

const initialState = {
  countryInfo: undefined,
  loading: false,
  error: false,
  errorMessage: "",
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryData.pending, (state: CountryData) => {
      state.countryInfo = undefined;
      state.loading = true;
    });
    builder.addCase(getCountryData.fulfilled, (state: CountryData, payload) => {
      state.countryInfo = payload.payload;
      state.loading = false;
    });
    builder.addCase(getCountryData.rejected, (state: CountryData, payload) => {
      let errorInfo;

      if (payload.error.message)
        errorInfo = JSON.parse(payload.error.message).responseBackEnd;

      state.countryInfo = [];
      state.errorMessage = errorInfo;
      state.loading = false;
      state.error = true;
    });
  },
});

// export const { ... } = weatherSlice.actions;
export const countryReducer = countrySlice.reducer;
