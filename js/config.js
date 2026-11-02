/* ═══════════════════════════════════════════════════════════════
   FLEUR & FLAME · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "fleur-and-flame",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Margaux",                   // SAMPLE
    partnerTwo: "Theodore",                  // SAMPLE
    initials:  "M · T",                      // SAMPLE — used on seals & monograms
    namesLine: "Margaux & Theodore"          // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 12 June 2027, 5:00 PM, GMT+1 (BST).
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-06-12T17:00:00+01:00",                              // EDIT
    endIso: "2027-06-13T00:30:00+01:00",                           // EDIT — end of the celebration
    display: "Saturday, 12 June 2027 · 5:00 PM",                   // EDIT
    zoneLabel: "",                                                 // EDIT — optional note for guests abroad, e.g. "BST"
    words: "Saturday · The Twelfth of June · Two Thousand Twenty-Seven", // EDIT
    numerals: "12 · 06 · 2027",                                    // EDIT
    eventTitle: "Margaux & Theodore — Wedding"                     // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Walled Garden at Merefield",       // SAMPLE
    address: "Merefield Manor, Gloucestershire",  // SAMPLE
    mapsQuery: "",                                // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Margaux & Theodore · 12 June 2027 — A Candlelit Garden Invitation",
    pageDescription: "Margaux and Theodore request the pleasure of your company in the walled garden at Merefield, Gloucestershire, on Saturday the twelfth of June 2027. Open your invitation.",
    socialTitle: "Margaux & Theodore — An Invitation · 12.06.2027",
    socialDescription: "Pressed flowers, candlelight and a garden dinner — you are cordially invited.",
    navStory: "Story",
    navDetails: "Details",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Details",
    menuPalette: "The Palette",
    menuWeddingDay: "The Wedding Day",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "A candlelit garden invitation from",
    openingHint: "You are cordially invited",
    openButton: "Open the Invitation",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "friends & family",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the pleasure of your company as they exchange vows in the walled garden and dine under the first stars of summer.",
    invitationVenueSuffix: "· Gloucestershire",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "Our",
    storyTitleScript: "Story",
    storyParagraphOne: "Every garden begins with a single seed, and ours was planted on a rainy Tuesday — a shared umbrella, a closed bookshop, and one conversation that outlasted the weather.",
    storyParagraphTwo: "Six years, three flats and one very opinionated cat later, we are finally planting the garden we always talked about. Nothing would mean more than to have you standing beside us when we do.",
    storyQuote: "To love and be loved is to feel the sun from both sides.",
    storyQuoteLabel: "— a page from our notebook",
    storyNote: "somewhere between hello & forever",
    storyNoteCredit: "— a note we keep returning to",
    storyCaptionOne: "the first chapter",
    storyCaptionTwo: "always, us",
    storyCaptionFour: "the long way home",
    storyAside: "the beginning of always",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "golden hour, golden years",
    saveDateNote: "The date is set. Add it to your calendar and keep these details close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Particulars",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Details",
    detailsIntro: "The day, at a glance.",
    ceremonyLabel: "The Ceremony",
    ceremonyTime: "Five o'clock",
    ceremonyNote: "Vows between the rose borders, weather kindly permitting.",
    receptionLabel: "The Reception",
    receptionTime: "Half past six",
    receptionNote: "A candlelit dinner and dancing under the open sky.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply form further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garden formal",
    particularsAttireNote: "Soft tones are welcome — wear what makes you feel wonderful.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At midnight",
    particularsCarriagesNote: "The last dance ends as the candles burn low.",
    paletteKicker: "№ 05 · A Note on Colour",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "A study in sage and dusty rose, warmed by candlelight — chosen to feel at home between the garden walls.",
    dressCodeLabel: "Attire · Garden celebration",
    dressCodeTitle: "Garden formal",
    dressCodeNote: "A little dressed up, a little garden-ready. Soft tones are welcome, but the palette is only a suggestion — wear what makes you feel wonderful.",
    weddingDayKicker: "№ 06 · The Celebration",
    weddingDayTitleFirst: "The Wedding",
    weddingDayTitleSecond: "Day",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A four-hundred-year-old walled garden wrapped in roses and old apple trees — where long tables, candlelight and string lights drift slowly into warm summer nights.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "in the rose garden, at five o'clock",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing beneath the string lights",
    mapButton: "View Location",
    rsvpKicker: "№ 08 · Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Eleanor Whitmore",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Allergies, intolerances, or dishes to avoid",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, well wishes…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "№ 09 · Counting the Moments",
    countdownTitle: "until we say",
    countdownPromise: "“I do”",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the bottom of our hearts, for being part of our story. We cannot wait to celebrate with you among the roses and the candlelight.",
    footerTagline: "A garden, a flame, a forever."
  },

  palette: [
    { name: "Linen",   color: "#F8F5EC" },
    { name: "Sage",    color: "#A1A18A" },
    { name: "Dusty Rose", color: "#C5A0A0" },
    { name: "Candlelight", color: "#CBB98E" },
    { name: "Garden Green", color: "#53513A" }
  ],
  theme: "olive",
  themeColors: {},
  fonts: {
    editorial: "playfair",
    display: "ebGaramond",
    script: "greatVibes",
    hand: "caveat",
    body: "dmSans"
  },

  /* ── Wedding-day moments — SAMPLE words for the wedding programme.
     Use one short word per entry; an empty list hides the section. */
  moments: ["Arrival", "Vows", "Gathering", "Feast", "Toasts", "Cake", "Dancing"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 2,
    deadline: "the first of May, 2027"             // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The exact hour is still being pressed between the pages — see the details below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
