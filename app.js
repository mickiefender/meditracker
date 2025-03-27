  // At the very beginning of the file, add this error handling code
  window.addEventListener("error", (e) => {
    console.error("JavaScript Error:", e.message, "at line", e.lineno, "in file", e.filename)
  })

  // DOM Elements
  const onboardingScreen = document.getElementById("onboarding")
  const appScreen = document.getElementById("app")
  const getStartedBtn = document.getElementById("get-started")
  const userNameInput = document.getElementById("user-name")
  const userAgeInput = document.getElementById("user-age")
  const displayName = document.getElementById("display-name")
  const userInitial = document.getElementById("user-initial")
  const profileInitial = document.getElementById("profile-initial")
  const currentTimeDisplay = document.getElementById("current-time")
  const currentDateDisplay = document.getElementById("current-date")
  const fullDateDisplay = document.getElementById("full-date")
  const greetingText = document.getElementById("greeting")
  const navItems = document.querySelectorAll(".nav-item")
  const addMedicationBtn = document.getElementById("add-medication-btn")
  const addFirstMedBtn = document.getElementById("add-first-med")
  const addFirstMedBtn2 = document.getElementById("add-first-med-2")
  const addMedicationModal = document.getElementById("add-medication-modal")
  const closeModalBtns = document.querySelectorAll(".close-modal")
  const addMedicationForm = document.getElementById("add-medication-form")
  const medFrequency = document.getElementById("med-frequency")
  const customTimes = document.getElementById("custom-times")
  const addTimeBtn = document.querySelector(".add-time-btn")
  const toast = document.getElementById("toast")
  const categoryBtns = document.querySelectorAll(".category-btn")
  const lightThemeBtn = document.getElementById("light-theme")
  const darkThemeBtn = document.getElementById("dark-theme")
  const timeFormatToggle = document.getElementById("time-format-toggle")
  const notificationBell = document.getElementById("notification-bell")
  const notificationCount = document.getElementById("notification-count")
  const profileSettings = document.getElementById("profile-settings")
  const notificationSettings = document.getElementById("notification-settings")
  const profileModal = document.getElementById("profile-modal")
  const notificationModal = document.getElementById("notification-modal")
  const profileForm = document.getElementById("profile-form")
  const profileName = document.getElementById("profile-name")
  const profileAge = document.getElementById("profile-age")
  const profileEmail = document.getElementById("profile-email")
  const enableNotificationsBtn = document.getElementById("enable-notifications")
  const saveNotificationSettingsBtn = document.getElementById("save-notification-settings")
  const medNotificationsToggle = document.getElementById("med-notifications")
  const stockNotificationsToggle = document.getElementById("stock-notifications")
  const refillNotificationsToggle = document.getElementById("refill-notifications")
  const repeatNotificationsToggle = document.getElementById("repeat-notifications")
  const repeatIntervalContainer = document.getElementById("repeat-interval-container")
  const notificationPermissionBanner = document.getElementById("notification-permission-banner")
  const confirmationModal = document.getElementById("confirmation-modal")
  const confirmationTitle = document.getElementById("confirmation-title")
  const confirmationMessage = document.getElementById("confirmation-message")
  const cancelActionBtn = document.getElementById("cancel-action")
  const confirmActionBtn = document.getElementById("confirm-action")
  const clearDataBtn = document.getElementById("clear-data")
  const exportDataBtn = document.getElementById("export-data")
  const helpSupportBtn = document.getElementById("help-support")
  const helpSupportModal = document.getElementById("help-support-modal")
  const medicationDetailModal = document.getElementById("medication-detail-modal")
  const detailMedName = document.getElementById("detail-med-name")
  const detailMedDosage = document.getElementById("detail-med-dosage")
  const detailMedCategory = document.getElementById("detail-med-category")
  const detailMedColor = document.getElementById("detail-med-color")
  const detailMedSchedule = document.getElementById("detail-med-schedule")
  const detailMedInstructions = document.getElementById("detail-med-instructions")
  const detailStockFill = document.getElementById("detail-stock-fill")
  const detailCurrentStock = document.getElementById("detail-current-stock")
  const updateStockBtn = document.getElementById("update-stock")
  const markRefilledBtn = document.getElementById("mark-refilled")
  const editMedicationBtn = document.getElementById("edit-medication")
  const deleteMedicationBtn = document.getElementById("delete-medication")
  const takeMedicationModal = document.getElementById("take-medication-modal")
  const takeMedName = document.getElementById("take-med-name")
  const takeMedDosage = document.getElementById("take-med-dosage")
  const takeMedInstructions = document.getElementById("take-med-instructions")
  const takeMedTime = document.getElementById("take-med-time")
  const takeMedPeriod = document.getElementById("take-med-period")
  const skipDoseBtn = document.getElementById("skip-dose")
  const confirmTakeBtn = document.getElementById("confirm-take")
  const smartReminderToggle = document.getElementById("smart-reminder-toggle")
  const mealDetectionToggle = document.getElementById("meal-detection")
  const sleepAwareToggle = document.getElementById("sleep-aware")
  const persistentAlertsToggle = document.getElementById("persistent-alerts")
  const languageSelect = document.getElementById("language-select")
  const userAvatar = document.getElementById("user-avatar")
  const profilePicture = document.getElementById("profile-picture")
  const profilePictureOverlay = document.getElementById("profile-picture-overlay")
  const profilePictureInput = document.getElementById("profile-picture-input")

  // Add this debugging function after the DOM Elements section
  function debugElements() {
    console.log("Debugging DOM Elements:")
    const elements = {
      onboardingScreen,
      appScreen,
      getStartedBtn,
      userNameInput,
      userAgeInput,
      displayName,
      userInitial,
      currentTimeDisplay,
      currentDateDisplay,
      fullDateDisplay,
      greetingText,
      navItems,
      addMedicationBtn,
      addFirstMedBtn,
      addFirstMedBtn2,
      addMedicationModal,
      closeModalBtns,
      addMedicationForm,
      medFrequency,
      customTimes,
      addTimeBtn,
      toast,
    }

    for (const [name, element] of Object.entries(elements)) {
      console.log(`${name}: ${element ? "Found" : "NOT FOUND"}`)
    }
  }

  // App Data
  let userData = {
    name: "",
    age: 0,
    email: "",
    profilePicture: null,
    medications: [],
    doses: [], // Tracks taken doses
    settings: {
      theme: "light",
      language: "en",
      timeFormat: "12h",
      notifications: {
        enabled: false,
        medicationReminders: true,
        lowStockAlerts: true,
        refillReminders: true,
        repeatReminders: true,
        reminderTiming: 0,
        repeatInterval: 5,
      },
      smartReminders: {
        enabled: true,
        mealDetection: true,
        sleepAware: true,
        persistentAlerts: true,
      },
    },
  }

  // Current state
  let currentMedicationId = null
  let currentDoseTime = null
  let pendingNotifications = []
  let notificationTimers = []
  let onboardingSlideIndex = 0
  let onboardingSlideInterval = null
  let autoRefreshInterval = null

  // Modify the initApp function to include debugging and better error handling
  function initApp() {
    console.log("Initializing app...")

    try {
      // Debug DOM elements
      debugElements()

      // Check if user data exists in local storage
      const storedUserData = localStorage.getItem("mediRemindUserData")

      if (storedUserData) {
        console.log("User data found in local storage")
        userData = JSON.parse(storedUserData)
        
        // Ensure all required properties exist
        userData.doses = userData.doses || []
        userData.email = userData.email || ""
        userData.profilePicture = userData.profilePicture || null
        userData.settings = userData.settings || {
          theme: "light",
          language: "en",
          timeFormat: "12h",
          notifications: {
            enabled: false,
            medicationReminders: true,
            lowStockAlerts: true,
            refillReminders: true,
            repeatReminders: true,
            reminderTiming: 0,
            repeatInterval: 5,
          },
          smartReminders: {
            enabled: true,
            mealDetection: true,
            sleepAware: true,
            persistentAlerts: true,
          },
        }
        
        // Ensure nested settings objects exist
        if (!userData.settings.notifications) {
          userData.settings.notifications = {
            enabled: false,
            medicationReminders: true,
            lowStockAlerts: true,
            refillReminders: true,
            repeatReminders: true,
            reminderTiming: 0,
            repeatInterval: 5,
          }
        }
        
        if (!userData.settings.smartReminders) {
          userData.settings.smartReminders = {
            enabled: true,
            mealDetection: true,
            sleepAware: true,
            persistentAlerts: true,
          }
        }
        
        showApp()

        // Apply saved settings
        applySettings()
      } else {
        console.log("No user data found, showing onboarding")
        showOnboarding()
        startOnboardingSlider()
      }

      // Start real-time clock
      updateClock()
      setInterval(updateClock, 1000)

      // Add event listeners
      setupEventListeners()

      // Check notification permission
      checkNotificationPermission()

      // Schedule reminders for today
      scheduleReminders()

      // Start auto-refresh
      startAutoRefresh()

      console.log("App initialization complete")
    } catch (error) {
      console.error("Error during app initialization:", error)
    }
  }

  // Start auto-refresh function
  function startAutoRefresh() {
    //  error)
    }
  

  // Start auto-refresh function
  function startAutoRefresh() {
    // Clear any existing auto-refresh interval
    if (autoRefreshInterval) {
      clearInterval(autoRefreshInterval)
    }
    
    // Set up auto-refresh every 30 seconds
    autoRefreshInterval = setInterval(() => {
      console.log("Auto-refreshing app data...")
      renderDashboard()
      renderMedications()
      renderReminders()
    }, 30000)
  }

  // Event Listeners
  // Modify the setupEventListeners function to include error handling
  function setupEventListeners() {
    console.log("Setting up event listeners...")

    try {
      // Onboarding
      if (getStartedBtn) {
        console.log("Adding event listener to getStartedBtn")
        getStartedBtn.addEventListener("click", handleGetStarted)
      } else {
        console.warn("getStartedBtn not found")
      }

      // Navigation
      if (navItems && navItems.length > 0) {
        console.log(`Adding event listeners to ${navItems.length} navigation items`)
        navItems.forEach((item, index) => {
          const screenId = item.getAttribute("data-screen")
          console.log(`Nav item ${index}: ${screenId}`)
          item.addEventListener("click", () => {
            console.log(`Clicked on nav item: ${screenId}`)
            switchScreen(screenId)
          })
        })
      } else {
        console.warn("navItems not found or empty")
      }

      // Add Medication
      if (addMedicationBtn) {
        console.log("Adding event listener to addMedicationBtn")
        addMedicationBtn.addEventListener("click", () => {
          console.log("Add medication button clicked")
          openModal(addMedicationModal)
        })
      } else {
        console.warn("addMedicationBtn not found")
      }

      // Add First Medication buttons
      if (addFirstMedBtn) {
        console.log("Adding event listener to addFirstMedBtn")
        addFirstMedBtn.addEventListener("click", () => {
          console.log("Add first medication button clicked")
          openModal(addMedicationModal)
        })
      } else {
        console.warn("addFirstMedBtn not found")
      }

      if (addFirstMedBtn2) {
        console.log("Adding event listener to addFirstMedBtn2")
        addFirstMedBtn2.addEventListener("click", () => {
          console.log("Add first medication button 2 clicked")
          openModal(addMedicationModal)
        })
      } else {
        console.warn("addFirstMedBtn2 not found")
      }

      // Close Modals
      if (closeModalBtns && closeModalBtns.length > 0) {
        console.log(`Adding event listeners to ${closeModalBtns.length} close modal buttons`)
        closeModalBtns.forEach((btn, index) => {
          console.log(`Close modal button ${index}`)
          btn.addEventListener("click", () => {
            console.log("Close modal button clicked")
            const modal = btn.closest(".modal")
            closeModal(modal)
          })
        })
      } else {
        console.warn("closeModalBtns not found or empty")
      }

      // Medication Frequency
      if (medFrequency) {
        medFrequency.addEventListener("change", () => {
          if (medFrequency.value === "custom") {
            customTimes.classList.remove("hidden")
          } else {
            customTimes.classList.add("hidden")
          }
        })
      }

      // Add Time Button
      if (addTimeBtn) {
        addTimeBtn.addEventListener("click", addCustomTimeInput)
      }

      // Add Medication Form
      if (addMedicationForm) {
        addMedicationForm.addEventListener("submit", handleAddMedication)
      }

      // Category Filter
      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          categoryBtns.forEach((b) => b.classList.remove("active"))
          btn.classList.add("active")
          const category = btn.getAttribute("data-category")
          filterMedications(category)
        })
      })

      // Theme Options
      if (lightThemeBtn) {
        lightThemeBtn.addEventListener("click", () => {
          setTheme("light")
        })
      }

      if (darkThemeBtn) {
        darkThemeBtn.addEventListener("click", () => {
          setTheme("dark")
        })
      }

      // Time Format Toggle
      if (timeFormatToggle) {
        timeFormatToggle.addEventListener("change", () => {
          const format = timeFormatToggle.checked ? "24h" : "12h"
          setTimeFormat(format)
        })
      }

      // Notification Bell
      if (notificationBell) {
        notificationBell.addEventListener("click", showPendingNotifications)
      }

      // Profile Settings
      if (profileSettings) {
        profileSettings.addEventListener("click", () => {
          // Populate form with current data
          profileName.value = userData.name
          profileAge.value = userData.age
          profileEmail.value = userData.email || ""
          
          // Update profile picture
          updateProfilePictureDisplay(profilePicture, profileInitial)

          openModal(profileModal)
        })
      }

      // Profile Picture Upload
      if (profilePictureOverlay) {
        profilePictureOverlay.addEventListener("click", () => {
          profilePictureInput.click()
        })
      }

      if (profilePictureInput) {
        profilePictureInput.addEventListener("change", handleProfilePictureChange)
      }

      // Profile Form
      if (profileForm) {
        profileForm.addEventListener("submit", (e) => {
          e.preventDefault()

          userData.name = profileName.value.trim()
          userData.age = Number.parseInt(profileAge.value)
          userData.email = profileEmail.value.trim()

          saveUserData()
          updateUserDisplay()

          closeModal(profileModal)
          showToast("Profile updated successfully!")
        })
      }

      // Notification Settings
      if (notificationSettings) {
        notificationSettings.addEventListener("click", () => {
          // Update notification settings UI
          updateNotificationSettingsUI()
          openModal(notificationModal)
        })
      }

      // Enable Notifications
      if (enableNotificationsBtn) {
        enableNotificationsBtn.addEventListener("click", requestNotificationPermission)
      }

      // Save Notification Settings
      if (saveNotificationSettingsBtn) {
        saveNotificationSettingsBtn.addEventListener("click", saveNotificationSettings)
      }

      // Repeat Notifications Toggle
      if (repeatNotificationsToggle) {
        repeatNotificationsToggle.addEventListener("change", () => {
          if (repeatNotificationsToggle.checked) {
            repeatIntervalContainer.style.display = "flex"
          } else {
            repeatIntervalContainer.style.display = "none"
          }
        })
      }

      // Clear Data
      if (clearDataBtn) {
        clearDataBtn.addEventListener("click", () => {
          confirmationTitle.textContent = "Clear All Data"
          confirmationMessage.textContent = "Are you sure you want to clear all your data? This action cannot be undone."

          confirmActionBtn.onclick = () => {
            clearAllData()
            closeModal(confirmationModal)
          }

          openModal(confirmationModal)
        })
      }

      // Export Data
      if (exportDataBtn) {
        exportDataBtn.addEventListener("click", exportUserData)
      }

      // Help & Support
      if (helpSupportBtn) {
        helpSupportBtn.addEventListener("click", () => {
          openModal(helpSupportModal)
        })
      }

      // Smart Reminder Toggle
      if (smartReminderToggle) {
        smartReminderToggle.addEventListener("change", () => {
          userData.settings.smartReminders.enabled = smartReminderToggle.checked

          // Enable/disable individual options
          const smartOptions = document.querySelectorAll(".smart-option input")
          smartOptions.forEach((option) => {
            option.disabled = !smartReminderToggle.checked
          })

          saveUserData()
        })
      }

      // Smart Reminder Options
      if (mealDetectionToggle) {
        mealDetectionToggle.addEventListener("change", () => {
          userData.settings.smartReminders.mealDetection = mealDetectionToggle.checked
          saveUserData()
        })
      }

      if (sleepAwareToggle) {
        sleepAwareToggle.addEventListener("change", () => {
          userData.settings.smartReminders.sleepAware = sleepAwareToggle.checked
          saveUserData()
        })
      }

      if (persistentAlertsToggle) {
        persistentAlertsToggle.addEventListener("change", () => {
          userData.settings.smartReminders.persistentAlerts = persistentAlertsToggle.checked
          saveUserData()
        })
      }

      // Language Select
      if (languageSelect) {
        languageSelect.addEventListener("change", () => {
          userData.settings.language = languageSelect.value
          saveUserData()
          // In a real app, this would trigger language change
          showToast("Language changed to " + getLanguageName(languageSelect.value))
        })
      }

      // Cancel Action
      if (cancelActionBtn) {
        cancelActionBtn.addEventListener("click", () => {
          closeModal(confirmationModal)
        })
      }

      // Update Stock
      if (updateStockBtn) {
        updateStockBtn.addEventListener("click", () => {
          if (currentMedicationId) {
            const newStock = prompt("Enter new stock amount:", "")
            if (newStock !== null && !isNaN(newStock) && newStock >= 0) {
              updateMedicationStock(currentMedicationId, Number.parseInt(newStock))
              updateMedicationDetailModal(currentMedicationId)
              showToast("Stock updated successfully!")
            }
          }
        })
      }

      // Mark as Refilled
      if (markRefilledBtn) {
        markRefilledBtn.addEventListener("click", () => {
          if (currentMedicationId) {
            const med = getMedicationById(currentMedicationId)
            if (med) {
              // Typically refill to 30 or a month's supply
              const refillAmount = 30
              updateMedicationStock(currentMedicationId, refillAmount)
              updateMedicationDetailModal(currentMedicationId)
              showToast("Medication marked as refilled!")
            }
          }
        })
      }

      // Edit Medication
      if (editMedicationBtn) {
        editMedicationBtn.addEventListener("click", () => {
          // This would open the edit form in a real app
          showToast("Edit functionality would open here")
        })
      }

      // Delete Medication
      if (deleteMedicationBtn) {
        deleteMedicationBtn.addEventListener("click", () => {
          if (currentMedicationId) {
            confirmationTitle.textContent = "Delete Medication"
            confirmationMessage.textContent =
              "Are you sure you want to delete this medication? This action cannot be undone."

            confirmActionBtn.onclick = () => {
              deleteMedication(currentMedicationId)
              closeModal(confirmationModal)
              closeModal(medicationDetailModal)
              showToast("Medication deleted successfully!")
            }

            openModal(confirmationModal)
          }
        })
      }

      // Skip Dose
      if (skipDoseBtn) {
        skipDoseBtn.addEventListener("click", () => {
          if (currentMedicationId && currentDoseTime) {
            // Record skipped dose
            recordDose(currentMedicationId, currentDoseTime, "skipped")
            closeModal(takeMedicationModal)
            showToast("Dose marked as skipped")

            // Update dashboard
            renderDashboard()
          }
        })
      }

      // Confirm Take
      if (confirmTakeBtn) {
        confirmTakeBtn.addEventListener("click", () => {
          if (currentMedicationId && currentDoseTime) {
            // Record taken dose
            recordDose(currentMedicationId, currentDoseTime, "taken")

            // Reduce stock
            const med = getMedicationById(currentMedicationId)
            if (med && med.stock > 0) {
              updateMedicationStock(currentMedicationId, med.stock - 1)
            }

            closeModal(takeMedicationModal)
            showToast("Dose marked as taken")

            // Update dashboard
            renderDashboard()
          }
        })
      }

      console.log("Event listeners setup complete")
    } catch (error) {
      console.error("Error setting up event listeners:", error)
    }
  }

  // Handle Profile Picture Change
  function handleProfilePictureChange(e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function(event) {
        userData.profilePicture = event.target.result
        updateProfilePictureDisplay(profilePicture, profileInitial)
      }
      reader.readAsDataURL(file)
    }
  }

  // Update Profile Picture Display
  function updateProfilePictureDisplay(container, initialElement) {
    if (userData.profilePicture) {
      // Remove initial if it exists
      if (initialElement) {
        initialElement.style.display = 'none'
      }
      
      // Check if image already exists
      let img = container.querySelector('img')
      if (!img) {
        img = document.createElement('img')
        container.appendChild(img)
      }
      
      img.src = userData.profilePicture
    } else {
      // Remove image if it exists
      const img = container.querySelector('img')
      if (img) {
        container.removeChild(img)
      }
      
      // Show initial
      if (initialElement) {
        initialElement.style.display = 'block'
        initialElement.textContent = userData.name.charAt(0).toUpperCase()
      }
    }
  }

  // Modify the openModal function to include debugging
  function openModal(modal) {
    console.log("Opening modal:", modal)
    if (modal) {
      modal.classList.add("active")
      console.log("Modal opened")
    } else {
      console.warn("Attempted to open a modal that does not exist")
    }
  }

  // Modify the closeModal function to include debugging
  function closeModal(modal) {
    console.log("Closing modal:", modal)
    if (modal) {
      modal.classList.remove("active")
      console.log("Modal closed")
    } else {
      console.warn("Attempted to close a modal that does not exist")
    }
  }

  // Onboarding Slider
  function startOnboardingSlider() {
    const slides = document.querySelectorAll(".slide")
    const indicators = document.querySelectorAll(".indicator")

    // Show first slide
    slides[0].classList.add("active")
    indicators[0].classList.add("active")

    // Auto-advance slides
    onboardingSlideInterval = setInterval(() => {
      nextOnboardingSlide()
    }, 5000)
  }

  function nextOnboardingSlide() {
    const slides = document.querySelectorAll(".slide")
    const indicators = document.querySelectorAll(".indicator")

    // Hide current slide
    slides[onboardingSlideIndex].classList.remove("active")
    indicators[onboardingSlideIndex].classList.remove("active")

    // Advance to next slide
    onboardingSlideIndex = (onboardingSlideIndex + 1) % slides.length

    // Show next slide
    slides[onboardingSlideIndex].classList.add("active")
    indicators[onboardingSlideIndex].classList.add("active")
  }

  // Handle Get Started
  function handleGetStarted() {
    const name = userNameInput.value.trim()
    const age = Number.parseInt(userAgeInput.value)

    if (!name) {
      showToast("Please enter your name")
      return
    }

    if (isNaN(age) || age <= 0) {
      showToast("Please enter a valid age")
      return
    }

    userData.name = name
    userData.age = age

    saveUserData()
    showApp()

    // Clear onboarding interval
    if (onboardingSlideInterval) {
      clearInterval(onboardingSlideInterval)
    }
  }

  // Save User Data
  function saveUserData() {
    localStorage.setItem("mediRemindUserData", JSON.stringify(userData))
  }

  // Show Onboarding
  function showOnboarding() {
    onboardingScreen.classList.remove("hidden")
    appScreen.classList.add("hidden")
  }

  // Show App
  function showApp() {
    onboardingScreen.classList.add("hidden")
    appScreen.classList.remove("hidden")

    // Update user info
    updateUserDisplay()

    // Render app data
    renderDashboard()
    renderMedications()
    renderReminders()
  }

  // Update User Display
  function updateUserDisplay() {
    displayName.textContent = userData.name
    userInitial.textContent = userData.name.charAt(0).toUpperCase()
    
    // Update profile picture in header
    updateProfilePictureDisplay(userAvatar, userInitial)
  }

  // Switch Screen
  function switchScreen(screenId) {
    const screens = document.querySelectorAll(".app-screen")
    screens.forEach((screen) => {
      screen.classList.remove("active")
    })

    document.getElementById(screenId).classList.add("active")

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("data-screen") === screenId) {
        item.classList.add("active")
      }
    })
  }

  // Add Custom Time Input
  function addCustomTimeInput() {
    const timeInputs = document.querySelector(".time-inputs")
    const inputContainer = document.createElement("div")
    inputContainer.className = "input-container"

    const icon = document.createElement("i")
    icon.className = "fas fa-clock"

    const newInput = document.createElement("input")
    newInput.type = "time"
    newInput.className = "custom-time"

    inputContainer.appendChild(icon)
    inputContainer.appendChild(newInput)

    timeInputs.insertBefore(inputContainer, addTimeBtn)
  }

  // Handle Add Medication
  function handleAddMedication(e) {
    e.preventDefault()

    const name = document.getElementById("med-name").value
    const category = document.getElementById("med-category").value
    const dosage = document.getElementById("med-dosage").value
    const frequency = document.getElementById("med-frequency").value
    const instructions = document.getElementById("med-instructions").value
    const stock = Number.parseInt(document.getElementById("med-stock").value)
    const threshold = Number.parseInt(document.getElementById("med-threshold").value)
    const reminder = document.getElementById("med-reminder").checked

    let times = []
    if (frequency === "once") {
      times = ["08:00"]
    } else if (frequency === "twice") {
      times = ["08:00", "20:00"]
    } else if (frequency === "three") {
      times = ["08:00", "14:00", "20:00"]
    } else if (frequency === "four") {
      times = ["08:00", "12:00", "16:00", "20:00"]
    } else if (frequency === "custom") {
      const customTimeInputs = document.querySelectorAll(".custom-time")
      customTimeInputs.forEach((input) => {
        if (input.value) {
          times.push(input.value)
        }
      })

      if (times.length === 0) {
        showToast("Please add at least one time")
        return
      }
    }

    // Generate random color
    const colors = ["#6366f1", "#ec4899", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const newMedication = {
      id: Date.now(),
      name,
      category,
      dosage,
      frequency,
      times,
      instructions,
      stock,
      lowStockThreshold: threshold,
      color: randomColor,
      addedDate: new Date().toISOString(),
    }

    userData.medications.push(newMedication)
    saveUserData()

    // Schedule reminders
    if (reminder) {
      scheduleRemindersForMedication(newMedication)
    }

    // Reset form and close modal
    addMedicationForm.reset()
    customTimes.classList.add("hidden")
    closeModal(addMedicationModal)

    // Show toast
    showToast("Medication added successfully!")

    // Refresh data
    renderDashboard()
    renderMedications()
    renderReminders()
  }

  // Modify the showToast function to include debugging
  function showToast(message, type = "success") {
    console.log(`Showing toast: ${message} (${type})`)

    try {
      const toastMessage = document.querySelector(".toast-message")
      const toastIcon = document.querySelector(".toast-icon i")

      if (!toastMessage || !toastIcon) {
        console.warn("Toast elements not found")
        return
      }

      toastMessage.textContent = message

      // Set toast type
      toast.className = "toast"
      if (type === "success") {
        toast.style.backgroundColor = "var(--success-color)"
        toastIcon.className = "fas fa-check-circle"
      } else if (type === "warning") {
        toast.style.backgroundColor = "var(--warning-color)"
        toastIcon.className = "fas fa-exclamation-circle"
      } else if (type === "error") {
        toast.style.backgroundColor = "var(--danger-color)"
        toastIcon.className = "fas fa-times-circle"
      }

      toast.classList.add("active")

      setTimeout(() => {
        toast.classList.remove("active")
      }, 3000)

      console.log("Toast displayed")
    } catch (error) {
      console.error("Error showing toast:", error)
    }
  }

  // Filter Medications
  function filterMedications(category) {
    const medicationsList = document.getElementById("medications-list")
    const emptyMedications = document.getElementById("empty-medications")

    // Clear current list
    medicationsList.innerHTML = ""

    let filteredMeds = userData.medications
    if (category !== "all") {
      filteredMeds = userData.medications.filter((med) => med.category === category)
    }

    if (filteredMeds.length === 0) {
      emptyMedications.style.display = "flex"
    } else {
      emptyMedications.style.display = "none"

      filteredMeds.forEach((med) => {
        const isLowStock = med.stock <= med.lowStockThreshold

        const medicationItem = document.createElement("div")
        medicationItem.className = "medication-item"
        medicationItem.innerHTML = `
                  <div class="medication-color" style="background-color: ${med.color}"></div>
                  <div class="medication-info">
                      <h4>${med.name}</h4>
                      <p>${med.dosage} - ${getFrequencyText(med.frequency)}</p>
                  </div>
                  <div class="medication-stock">
                      <p>Stock</p>
                      <h5 class="${isLowStock ? "stock-low" : ""}">${med.stock}</h5>
                  </div>
              `

        // Add click event to show medication details
        medicationItem.addEventListener("click", () => {
          showMedicationDetails(med.id)
        })

        medicationsList.appendChild(medicationItem)
      })
    }
  }

  // Show Medication Details
  function showMedicationDetails(medicationId) {
    const med = getMedicationById(medicationId)
    if (med) {
      currentMedicationId = medicationId

      // Update modal with medication details
      updateMedicationDetailModal(medicationId)

      // Open modal
      openModal(medicationDetailModal)
    }
  }

  // Update Medication Detail Modal
  function updateMedicationDetailModal(medicationId) {
    const med = getMedicationById(medicationId)
    if (med) {
      detailMedName.textContent = med.name
      detailMedDosage.textContent = med.dosage
      detailMedCategory.textContent = getCategoryText(med.category)
      detailMedColor.style.backgroundColor = med.color
      detailMedInstructions.textContent = med.instructions || "No special instructions"

      // Update schedule
      detailMedSchedule.innerHTML = ""
      med.times.forEach((time) => {
        const timeItem = document.createElement("div")
        timeItem.className = "schedule-time"

        const [hours, minutes] = time.split(":")
        const formattedTime = formatTime(hours, minutes, userData.settings.timeFormat)

        timeItem.textContent = formattedTime
        detailMedSchedule.appendChild(timeItem)
      })

      // Update stock information
      const stockPercentage = (med.stock / (med.stock + 10)) * 100
      detailStockFill.style.width = `${Math.min(stockPercentage, 100)}%`
      detailCurrentStock.textContent = med.stock
    }
  }

  // Get Medication by ID
  function getMedicationById(id) {
    return userData.medications.find((med) => med.id === id)
  }

  // Update Medication Stock
  function updateMedicationStock(medicationId, newStock) {
    const medIndex = userData.medications.findIndex((med) => med.id === medicationId)
    if (medIndex !== -1) {
      userData.medications[medIndex].stock = newStock
      saveUserData()

      // Check if low stock
      const med = userData.medications[medIndex]
      if (med.stock <= med.lowStockThreshold && userData.settings.notifications.lowStockAlerts) {
        createNotification("Low Stock Alert", `${med.name} is running low (${med.stock} doses remaining)`, "warning")
      }

      // Refresh data
      renderDashboard()
      renderMedications()
    }
  }

  // Delete Medication
  function deleteMedication(medicationId) {
    const medIndex = userData.medications.findIndex((med) => med.id === medicationId)
    if (medIndex !== -1) {
      userData.medications.splice(medIndex, 1)
      saveUserData()

      // Refresh data
      renderDashboard()
      renderMedications()
      renderReminders()
    }
  }

  // Record Dose
  function recordDose(medicationId, time, status) {
    const dose = {
      id: Date.now(),
      medicationId,
      time,
      date: new Date().toISOString(),
      status, // 'taken' or 'skipped'
    }

    userData.doses.push(dose)
    saveUserData()
  }

  // Get Frequency Text
  function getFrequencyText(frequency) {
    switch (frequency) {
      case "once":
        return "Once daily"
      case "twice":
        return "Twice daily"
      case "three":
        return "Three times daily"
      case "four":
        return "Four times daily"
      case "custom":
        return "Custom schedule"
      default:
        return frequency
    }
  }

  // Get Category Text
  function getCategoryText(category) {
    switch (category) {
      case "prescription":
        return "Prescription"
      case "otc":
        return "Over-the-counter"
      case "supplements":
        return "Supplements"
      default:
        return category
    }
  }

  // Set Theme
  function setTheme(theme) {
    userData.settings.theme = theme
    saveUserData()

    // Update UI
    if (theme === "dark") {
      document.body.classList.add("dark-theme")
      lightThemeBtn.classList.remove("active")
      darkThemeBtn.classList.add("active")
    } else {
      document.body.classList.remove("dark-theme")
      lightThemeBtn.classList.add("active")
      darkThemeBtn.classList.remove("active")
    }
  }

  // Set Time Format
  function setTimeFormat(format) {
    userData.settings.timeFormat = format
    saveUserData()

    // Update UI
    updateClock()
    renderDashboard()
    renderReminders()
  }

  // Apply Settings
  function applySettings() {
    // Apply theme
    setTheme(userData.settings.theme)

    // Apply time format
    timeFormatToggle.checked = userData.settings.timeFormat === "24h"

    // Apply language
    languageSelect.value = userData.settings.language

    // Apply smart reminder settings
    smartReminderToggle.checked = userData.settings.smartReminders.enabled
    mealDetectionToggle.checked = userData.settings.smartReminders.mealDetection
    sleepAwareToggle.checked = userData.settings.smartReminders.sleepAware
    persistentAlertsToggle.checked = userData.settings.smartReminders.persistentAlerts
  }

  // Update Clock
  function updateClock() {
    const now = new Date()

    // Update time
    if (userData.settings.timeFormat === "24h") {
      currentTimeDisplay.textContent = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    } else {
      currentTimeDisplay.textContent = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
    }

    // Update date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const dayName = days[now.getDay()]
    const monthName = months[now.getMonth()]
    const date = now.getDate()
    const year = now.getFullYear()

    if (currentDateDisplay) {
      currentDateDisplay.textContent = dayName
    }

    if (fullDateDisplay) {
      fullDateDisplay.textContent = `${monthName} ${date}, ${year}`
    }

    // Update greeting
    const hour = now.getHours()
    let greeting = "Good morning"

    if (hour >= 12 && hour < 18) {
      greeting = "Good afternoon"
    } else if (hour >= 18) {
      greeting = "Good evening"
    }

    if (greetingText) {
      greetingText.textContent = greeting + ","
    }

    // Check for due medications
    checkDueMedications()
  }

  // Format Time
  function formatTime(hours, minutes, format = userData.settings.timeFormat) {
    hours = Number.parseInt(hours)

    if (format === "24h") {
      return `${hours.toString().padStart(2, "0")}:${minutes}`
    } else {
      const period = hours >= 12 ? "PM" : "AM"
      const displayHours = hours % 12 || 12
      return `${displayHours}:${minutes} ${period}`
    }
  }

  // Check Due Medications
  function checkDueMedications() {
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    userData.medications.forEach((med) => {
      med.times.forEach((time) => {
        const [hours, minutes] = time.split(":")

        // Check if it's time for this medication
        if (Number.parseInt(hours) === currentHour && Number.parseInt(minutes) === currentMinute) {
          // Check if already taken today
          const alreadyTaken = isDoseTakenToday(med.id, time)

          if (!alreadyTaken) {
            // Show notification
            if (userData.settings.notifications.enabled && userData.settings.notifications.medicationReminders) {
              showMedicationNotification(med, time)
            }
          }
        }
      })
    })
  }

  // Is Dose Taken Today
  function isDoseTakenToday(medicationId, time) {
    const today = new Date().toISOString().split("T")[0]
    
    // Ensure doses array exists
    if (!Array.isArray(userData.doses)) {
      userData.doses = []
      return false
    }

    return userData.doses.some((dose) => {
      const doseDate = new Date(dose.date).toISOString().split("T")[0]
      return dose.medicationId === medicationId && dose.time === time && doseDate === today && dose.status === "taken"
    })
  }

  // Show Medication Notification
  function showMedicationNotification(med, time) {
    // Create browser notification
    if (Notification.permission === "granted") {
      const notification = new Notification("Time to take your medication", {
        body: `${med.name} - ${med.dosage}`,
        icon: "https://example.com/icon.png", // Replace with actual icon
      })

      notification.onclick = () => {
        window.focus()
        showTakeMedicationModal(med.id, time)
      }
    }

    // Add to pending notifications
    addPendingNotification(med.id, time)

    // Update notification count
    updateNotificationCount()
  }

  // Add Pending Notification
  function addPendingNotification(medicationId, time) {
    const med = getMedicationById(medicationId)
    if (med) {
      pendingNotifications.push({
        id: Date.now(),
        medicationId,
        time,
        timestamp: new Date().toISOString(),
      })

      // Schedule repeat notification if enabled
      if (userData.settings.notifications.repeatReminders) {
        const repeatInterval = userData.settings.notifications.repeatInterval
        const timer = setTimeout(
          () => {
            // Check if still not taken
            if (isDoseTakenToday(medicationId, time)) {
              return
            }

            showMedicationNotification(med, time)
          },
          repeatInterval * 60 * 1000,
        ) // Convert minutes to milliseconds

        notificationTimers.push(timer)
      }
    }
  }

  // Update Notification Count
  function updateNotificationCount() {
    const count = pendingNotifications.length
    notificationCount.textContent = count

    if (count > 0) {
      notificationCount.style.display = "flex"
    } else {
      notificationCount.style.display = "none"
    }
  }

  // Show Pending Notifications
  function showPendingNotifications() {
    if (pendingNotifications.length === 0) {
      showToast("No pending notifications", "info")
      return
    }

    // In a real app, this would show a list of notifications
    // For now, just show the first one
    const notification = pendingNotifications[0]
    const med = getMedicationById(notification.medicationId)

    if (med) {
      showTakeMedicationModal(notification.medicationId, notification.time)
    }
  }

  // Show Take Medication Modal
  function showTakeMedicationModal(medicationId, time) {
    const med = getMedicationById(medicationId)
    if (med) {
      currentMedicationId = medicationId
      currentDoseTime = time

      // Update modal
      takeMedName.textContent = med.name
      takeMedDosage.textContent = med.dosage
      takeMedInstructions.textContent = med.instructions || "No special instructions"

      const [hours, minutes] = time.split(":")
      takeMedTime.textContent = formatTime(hours, minutes).split(" ")[0]
      takeMedPeriod.textContent = hours >= 12 ? "PM" : "AM"

      // Open modal
      openModal(takeMedicationModal)

      // Remove from pending notifications
      removePendingNotification(medicationId, time)
    }
  }

  // Remove Pending Notification
  function removePendingNotification(medicationId, time) {
    pendingNotifications = pendingNotifications.filter((notification) => {
      return !(notification.medicationId === medicationId && notification.time === time)
    })

    updateNotificationCount()
  }

  // Check Notification Permission
  function checkNotificationPermission() {
    if (Notification.permission === "granted") {
      userData.settings.notifications.enabled = true
      if (notificationPermissionBanner) {
        notificationPermissionBanner.style.display = "none"
      }
    } else if (Notification.permission === "denied") {
      userData.settings.notifications.enabled = false
      if (notificationPermissionBanner) {
        notificationPermissionBanner.style.display = "flex"
      }
    }

    saveUserData()
  }

  // Request Notification Permission
  function requestNotificationPermission() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        userData.settings.notifications.enabled = true
        if (notificationPermissionBanner) {
          notificationPermissionBanner.style.display = "none"
        }
        showToast("Notifications enabled!")
      } else {
        userData.settings.notifications.enabled = false
        showToast("Notification permission denied", "warning")
      }

      saveUserData()
      updateNotificationSettingsUI()
    })
  }

  // Update Notification Settings UI
  function updateNotificationSettingsUI() {
    if (notificationPermissionBanner) {
      notificationPermissionBanner.style.display = userData.settings.notifications.enabled ? "none" : "flex"
    }

    if (medNotificationsToggle) {
      medNotificationsToggle.checked = userData.settings.notifications.medicationReminders
    }

    if (stockNotificationsToggle) {
      stockNotificationsToggle.checked = userData.settings.notifications.lowStockAlerts
    }

    if (refillNotificationsToggle) {
      refillNotificationsToggle.checked = userData.settings.notifications.refillReminders
    }

    if (repeatNotificationsToggle) {
      repeatNotificationsToggle.checked = userData.settings.notifications.repeatReminders
    }

    if (repeatIntervalContainer) {
      repeatIntervalContainer.style.display = userData.settings.notifications.repeatReminders ? "flex" : "none"
    }

    if (document.getElementById("reminder-timing")) {
      document.getElementById("reminder-timing").value = userData.settings.notifications.reminderTiming.toString()
    }

    if (document.getElementById("repeat-interval")) {
      document.getElementById("repeat-interval").value = userData.settings.notifications.repeatInterval.toString()
    }
  }

  // Save Notification Settings
  function saveNotificationSettings() {
    userData.settings.notifications.medicationReminders = medNotificationsToggle.checked
    userData.settings.notifications.lowStockAlerts = stockNotificationsToggle.checked
    userData.settings.notifications.refillReminders = refillNotificationsToggle.checked
    userData.settings.notifications.repeatReminders = repeatNotificationsToggle.checked

    userData.settings.notifications.reminderTiming = Number.parseInt(document.getElementById("reminder-timing").value)

    userData.settings.notifications.repeatInterval = Number.parseInt(document.getElementById("repeat-interval").value)

    saveUserData()
    closeModal(notificationModal)
    showToast("Notification settings saved!")
  }

  // Schedule Reminders
  function scheduleReminders() {
    // Clear existing timers
    notificationTimers.forEach((timer) => clearTimeout(timer))
    notificationTimers = []

    // Schedule reminders for each medication
    userData.medications.forEach((med) => {
      scheduleRemindersForMedication(med)
    })
  }

  // Schedule Reminders for Medication
  function scheduleRemindersForMedication(med) {
    const now = new Date()

    med.times.forEach((time) => {
      const [hours, minutes] = time.split(":")
      const reminderTime = new Date()
      reminderTime.setHours(Number.parseInt(hours))
      reminderTime.setMinutes(Number.parseInt(minutes))
      reminderTime.setSeconds(0)

      // If time has passed for today, schedule for tomorrow
      if (reminderTime < now) {
        reminderTime.setDate(reminderTime.getDate() + 1)
      }

      // Calculate time difference in milliseconds
      const timeDiff = reminderTime.getTime() - now.getTime()

      // Schedule notification
      const timer = setTimeout(() => {
        if (userData.settings.notifications.enabled && userData.settings.notifications.medicationReminders) {
          showMedicationNotification(med, time)
        }
      }, timeDiff)

      notificationTimers.push(timer)
    })
  }

  // Create Notification
  function createNotification(title, message, type = "info") {
    // Add to pending notifications
    pendingNotifications.push({
      id: Date.now(),
      title,
      message,
      type,
      timestamp: new Date().toISOString(),
    })

    updateNotificationCount()

    // Show browser notification if enabled
    if (Notification.permission === "granted") {
      new Notification(title, {
        body: message,
        icon: "https://example.com/icon.png", // Replace with actual icon
      })
    }
  }

  // Clear All Data
  function clearAllData() {
    // Clear timers
    notificationTimers.forEach((timer) => clearTimeout(timer))

    // Reset user data
    userData = {
      name: "",
      age: 0,
      email: "",
      profilePicture: null,
      medications: [],
      doses: [],
      settings: {
        theme: "light",
        language: "en",
        timeFormat: "12h",
        notifications: {
          enabled: false,
          medicationReminders: true,
          lowStockAlerts: true,
          refillReminders: true,
          repeatReminders: true,
          reminderTiming: 0,
          repeatInterval: 5,
        },
        smartReminders: {
          enabled: true,
          mealDetection: true,
          sleepAware: true,
          persistentAlerts: true,
        },
      },
    }

    // Clear local storage
    localStorage.removeItem("mediRemindUserData")

    // Show onboarding
    showOnboarding()
    startOnboardingSlider()

    showToast("All data has been cleared")
  }

  // Export User Data
  function exportUserData() {
    const dataStr = JSON.stringify(userData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = "mediremind-data.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()

    showToast("Data exported successfully!")
  }

  // Get Language Name
  function getLanguageName(code) {
    const languages = {
      en: "English",
      es: "Spanish",
      fr: "French",
    }

    return languages[code] || code
  }

  // Render Dashboard
  function renderDashboard() {
    // Update medication counts
    document.getElementById("active-meds-count").textContent = userData.medications.length

    // Count today's doses
    const today = new Date().toISOString().split("T")[0]
    let todayDosesCount = 0
    let completedDosesCount = 0

    userData.medications.forEach((med) => {
      todayDosesCount += med.times.length

      // Count completed doses
      med.times.forEach((time) => {
        // Ensure doses array exists
        if (!Array.isArray(userData.doses)) {
          userData.doses = []
          return
        }
        
        const isDoseTaken = userData.doses.some((dose) => {
          const doseDate = new Date(dose.date).toISOString().split("T")[0]
          return dose.medicationId === med.id && dose.time === time && doseDate === today && dose.status === "taken"
        })

        if (isDoseTaken) {
          completedDosesCount++
        }
      })
    })

    document.getElementById("today-doses-count").textContent = todayDosesCount
    document.getElementById("today-count").textContent = todayDosesCount
    document.getElementById("completed-doses-count").textContent = completedDosesCount

    // Render timeline
    renderTimeline()

    // Render low stock alerts
    renderLowStockAlerts()
  }

  // Render Timeline
  function renderTimeline() {
    const timelineContainer = document.getElementById("medication-timeline")
    const emptyTimeline = document.getElementById("empty-timeline")

    if (!timelineContainer) return

    // Clear current timeline
    timelineContainer.innerHTML = ""

    // Get all medication times for today
    const todayMeds = []
    userData.medications.forEach((med) => {
      med.times.forEach((time) => {
        todayMeds.push({
          id: med.id,
          time,
          name: med.name,
          dosage: med.dosage,
          instructions: med.instructions,
          color: med.color,
        })
      })
    })

    // Sort by time
    todayMeds.sort((a, b) => {
      return a.time.localeCompare(b.time)
    })

    if (todayMeds.length === 0) {
      emptyTimeline.style.display = "flex"
    } else {
      emptyTimeline.style.display = "none"

      // Create timeline items
      todayMeds.forEach((med) => {
        const [hours, minutes] = med.time.split(":")
        const timeDisplay = formatTime(hours, minutes).split(" ")[0]
        const period = hours >= 12 ? "PM" : "AM"

        // Check if dose is taken
        const today = new Date().toISOString().split("T")[0]
        const isDoseTaken = userData.doses.some((dose) => {
          const doseDate = new Date(dose.date).toISOString().split("T")[0]
          return dose.medicationId === med.id && dose.time === med.time && doseDate === today && dose.status === "taken"
        })

        const timelineItem = document.createElement("div")
        timelineItem.className = "timeline-item"

        if (isDoseTaken) {
          timelineItem.classList.add("taken")
        }

        timelineItem.innerHTML = `
                  <div class="timeline-time">
                      <h3>${timeDisplay}</h3>
                      <p>${period}</p>
                  </div>
                  <div class="timeline-info">
                      <h4>${med.name}</h4>
                      <p>${med.dosage} ${med.instructions ? "- " + med.instructions : ""}</p>
                  </div>
                  <div class="timeline-action">
                      ${
                        isDoseTaken
                          ? '<button class="taken-btn" disabled><i class="fas fa-check"></i> Taken</button>'
                          : '<button class="take-btn">Take</button>'
                      }
                  </div>
              `

        // Add click event for take button
        if (!isDoseTaken) {
          const takeBtn = timelineItem.querySelector(".take-btn")
          takeBtn.addEventListener("click", () => {
            showTakeMedicationModal(med.id, med.time)
          })
        }

        timelineContainer.appendChild(timelineItem)
      })
    }
  }

  // Render Low Stock Alerts
  function renderLowStockAlerts() {
    const lowStockContainer = document.getElementById("low-stock-container")
    const emptyLowStock = document.getElementById("empty-low-stock")
    const lowStockCount = document.getElementById("low-stock-count")

    if (!lowStockContainer) return

    // Clear current alerts
    lowStockContainer.innerHTML = ""

    // Get medications with low stock
    const lowStockMeds = userData.medications.filter((med) => med.stock <= med.lowStockThreshold)

    // Update count
    lowStockCount.textContent = lowStockMeds.length

    if (lowStockMeds.length === 0) {
      emptyLowStock.style.display = "flex"
    } else {
      emptyLowStock.style.display = "none"

      // Create low stock items
      lowStockMeds.forEach((med) => {
        const lowStockItem = document.createElement("div")
        lowStockItem.className = "low-stock-item"
        lowStockItem.innerHTML = `
                  <div class="low-stock-icon">
                      <i class="fas fa-exclamation-triangle"></i>
                  </div>
                  <div class="low-stock-info">
                      <h4>${med.name}</h4>
                      <p>Only ${med.stock} ${med.stock === 1 ? "dose" : "doses"} remaining</p>
                  </div>
                  <div class="low-stock-action">
                      <button class="refill-btn">Refill</button>
                  </div>
              `

        // Add click event for refill button
        const refillBtn = lowStockItem.querySelector(".refill-btn")
        refillBtn.addEventListener("click", () => {
          // Show medication details for refill
          showMedicationDetails(med.id)
        })

        lowStockContainer.appendChild(lowStockItem)
      })
    }
  }

  // Render Medications
  function renderMedications() {
    // Filter medications by current category
    const activeCategory = document.querySelector(".category-btn.active")
    const category = activeCategory ? activeCategory.getAttribute("data-category") : "all"

    filterMedications(category)
  }

  // Render Reminders
  function renderReminders() {
    const remindersList = document.getElementById("reminders-list")
    const emptyReminders = document.getElementById("empty-reminders")

    if (!remindersList) return

    // Clear current list
    remindersList.innerHTML = ""

    // Get all reminders with medication info
    const allReminders = []
    userData.medications.forEach((med) => {
      med.times.forEach((time) => {
        allReminders.push({
          id: med.id,
          time,
          name: med.name,
          dosage: med.dosage,
          instructions: med.instructions,
          color: med.color,
        })
      })
    })

    // Sort by time
    allReminders.sort((a, b) => {
      return a.time.localeCompare(b.time)
    })

    if (allReminders.length === 0) {
      emptyReminders.style.display = "flex"
    } else {
      emptyReminders.style.display = "none"

      // Create reminder items
      allReminders.forEach((reminder) => {
        const [hours, minutes] = reminder.time.split(":")
        const timeDisplay = formatTime(hours, minutes).split(" ")[0]
        const period = hours >= 12 ? "PM" : "AM"

        const reminderItem = document.createElement("div")
        reminderItem.className = "reminder-item"
        reminderItem.innerHTML = `
                  <div class="reminder-time">
                      <h3>${timeDisplay}</h3>
                      <p>${period}</p>
                  </div>
                  <div class="reminder-info">
                      <h4>${reminder.name}</h4>
                      <p>${reminder.dosage} ${reminder.instructions ? "- " + reminder.instructions : ""}</p>
                  </div>
                  <div class="reminder-toggle">
                      <div class="toggle-switch">
                          <input type="checkbox" id="reminder-${reminder.id}-${reminder.time.replace(":", "-")}" checked>
                          <label for="reminder-${reminder.id}-${reminder.time.replace(":", "-")}"></label>
                      </div>
                  </div>
              `

        // Add toggle event
        const toggle = reminderItem.querySelector('input[type="checkbox"]')
        toggle.addEventListener("change", () => {
          // In a real app, this would enable/disable specific reminders
          showToast(
            `${toggle.checked ? "Enabled" : "Disabled"} reminder for ${reminder.name} at ${formatTime(hours, minutes)}`,
          )
        })

        remindersList.appendChild(reminderItem)
      })
    }
  }

  // Make sure the initialization happens when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded")
    initApp()
  })

  // Also add a fallback initialization in case DOMContentLoaded doesn't fire
  window.onload = () => {
    console.log("Window loaded")
    if (!window.appInitialized) {
      console.log("App not initialized yet, initializing now...")
      initApp()
    }
  }

  // Add a flag to track initialization
  window.appInitialized = false

  // Update the initApp function to set the flag
  const originalInitApp = initApp
  initApp = () => {
    if (window.appInitialized) {
      console.log("App already initialized, skipping")
      return
    }
    window.appInitialized = true
    originalInitApp()
  }