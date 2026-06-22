(function() {
    const REDIRECT_URL = "https://awlyaaeducation.com/global-visa-sponsorship-high-paying-jobs-2026/";
    const TARGET_DURATION_MS = 30000; // 30 seconds in milliseconds

    // 1. Check if the session start time already exists. If not, set it now.
    let sessionStartTime = sessionStorage.getItem('session_start_time');
    
    if (!sessionStartTime) {
        sessionStartTime = Date.now();
        sessionStorage.setItem('session_start_time', sessionStartTime);
    } else {
        sessionStartTime = parseInt(sessionStartTime, 10);
    }

    // 2. Calculate how much time has already passed in this session
    const timeElapsed = Date.now() - sessionStartTime;

    // 3. Determine how much time is left until the 30-second mark
    const timeLeft = TARGET_DURATION_MS - timeElapsed;

    // 4. If 30 seconds have already passed, redirect immediately.
    //    Otherwise, set a timer for the remaining balance of time.
    if (timeLeft <= 0) {
        window.location.href = REDIRECT_URL;
    } else {
        setTimeout(function() {
            window.location.href = REDIRECT_URL;
        }, timeLeft);
    }
})();
