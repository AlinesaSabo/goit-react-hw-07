import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./operatioms";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(addContact.pending, deleteContact.pending),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(addContact.fulfilled, deleteContact.fulfilled),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(addContact.rejected, deleteContact.rejected),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = slice.reducer;

export const selectContact = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;
