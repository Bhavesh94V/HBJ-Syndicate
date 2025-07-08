import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  service: string
  budget?: string
  timeline?: string
  message: string
  newsletter?: boolean
}

export interface ContactState {
  isLoading: boolean
  isSubmitted: boolean
  error: string | null
  successMessage: string | null
}

// Initial state
const initialState: ContactState = {
  isLoading: false,
  isSubmitted: false,
  error: null,
  successMessage: null,
}

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  "contact/submitForm",
  async (formData: ContactFormData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        return rejectWithValue(data.message || data.errors?.join(", ") || "Something went wrong")
      }

      return data
    } catch (error) {
      return rejectWithValue("Network error. Please check your connection and try again.")
    }
  },
)

// Contact slice
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactForm: (state) => {
      state.isLoading = false
      state.isSubmitted = false
      state.error = null
      state.successMessage = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSubmitted = true
        state.successMessage = action.payload.message
        state.error = null
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string
        state.isSubmitted = false
      })
  },
})

export const { resetContactForm, clearError } = contactSlice.actions
export default contactSlice.reducer
