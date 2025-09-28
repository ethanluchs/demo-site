// Poor accessibility JavaScript - missing ARIA updates, keyboard handling, and screen reader support

// Global variables without proper state management
let mobileMenuOpen = false;
let currentPlan = null;

// No keyboard event handlers, only mouse events
function handleGetStarted() {
    // No ARIA live region updates
    console.log('Get Started clicked');
    // Simulate navigation without proper focus management
    window.location.hash = '#signup';
}

function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    
    // No ARIA attributes updated
    // No screen reader announcements
    if (mobileMenuOpen) {
        // Should update aria-expanded, but doesn't
        console.log('Mobile menu opened');
    } else {
        console.log('Mobile menu closed');
    }
}

function startTrial() {
    // No confirmation or error handling
    // No keyboard accessibility
    alert('Starting trial - this would normally open a signup form');
}

function watchDemo() {
    // Opens video without proper accessibility controls
    // No captions or transcript mentioned
    alert('Opening demo video - normally would play video without proper controls');
}

function learnMore(feature) {
    // Navigation without proper focus management
    // No ARIA announcements
    console.log(`Learning more about ${feature}`);
    // Should focus on relevant content but doesn't
}

function exploreFeatures() {
    // No proper navigation or focus management
    console.log('Exploring features');
    window.location.hash = '#features';
}

function selectPlan(planName) {
    currentPlan = planName;
    // No visual feedback for screen readers
    // No ARIA live region updates
    console.log(`Selected plan: ${planName}`);
    
    // Should update UI state but doesn't provide accessible feedback
    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => {
        card.classList.remove('selected');
    });
    
    // Poor state management without accessibility updates
    event.target.closest('.pricing-card').classList.add('selected');
}

function contactSales() {
    // No proper form handling or accessibility
    alert('Contact sales - would normally open contact form');
}

function navigate(section) {
    // Poor navigation without proper focus management
    // No ARIA announcements for page changes
    console.log(`Navigating to ${section}`);
    window.location.href = `#${section}`;
}

function openSocial(platform) {
    // Opens social media without warning users about external links
    // No ARIA labels or announcements
    console.log(`Opening ${platform}`);
    // Should announce to screen readers but doesn't
}

function focusEmail() {
    // Poor form interaction - should be actual input
    const emailDiv = document.querySelector('.email-input');
    emailDiv.innerHTML = '<input type="email" placeholder="Enter your email" style="background:transparent;border:none;outline:none;color:#9CA3AF;width:100%;">';
    
    // No proper focus management
    const input = emailDiv.querySelector('input');
    input.focus();
    
    // No ARIA labels or error handling
}

function subscribe() {
    const emailInput = document.querySelector('.email-input input');
    if (emailInput) {
        const email = emailInput.value;
        // No email validation or error handling
        // No success/error announcements for screen readers
        if (email) {
            alert('Subscribed! (normally would show proper confirmation)');
        } else {
            // Poor error handling without accessibility
            alert('Please enter an email');
        }
    } else {
        alert('Please click on the email field first');
    }
}

// Poor event handling - only mouse events, no keyboard support
document.addEventListener('DOMContentLoaded', function() {
    // No proper initialization of ARIA states
    // No keyboard event listeners added
    console.log('Page loaded - no accessibility setup performed');
    
    // Should set up proper keyboard navigation but doesn't
    const interactiveElements = document.querySelectorAll('[onclick]');
    interactiveElements.forEach(element => {
        // Missing tabindex for keyboard navigation
        // Missing ARIA roles and properties
        element.style.cursor = 'pointer';
    });
    
    // No skip links added
    // No proper heading structure validation
    // No ARIA landmarks added
});

// Missing keyboard event handlers
function handleKeyPress(event, action) {
    // This function should exist but is never called
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        action();
    }
}

// No proper error handling or user feedback
function showError(message) {
    // Should use ARIA live regions but doesn't
    console.log('Error:', message);
}

function showSuccess(message) {
    // Should use ARIA live regions but doesn't
    console.log('Success:', message);
}

// Missing focus management functions
function manageFocus(targetElement) {
    // Should properly manage focus for screen readers
    // Not implemented
}

function announceToScreenReader(message) {
    // Should create ARIA live region announcements
    // Not implemented
}

// Poor form validation without accessibility
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// No proper cleanup or memory management
window.addEventListener('beforeunload', function() {
    // Should clean up event listeners and ARIA states
    // Not implemented
});