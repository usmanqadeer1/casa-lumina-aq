# Casa Lumina AI

Build a complete, premium, fully responsive restaurant website demo with an integrated AI-powered restaurant concierge chatbot.

The purpose of this project is to demonstrate to potential restaurant clients how an AI concierge can be integrated directly into their website to answer customer questions, guide visitors, and capture high-value leads such as reservations, catering requests, and private event inquiries.

This is a demo product for an AI agency called Aqalion. The restaurant itself should be fictional so the demo can later be customized for real restaurants.

Core Concept

Create a fictional upscale Italian restaurant called:

CASA LUMINA

Location: Dallas, Texas

Tagline:

Modern Italian Dining, Reimagined.

The website should feel like a real, premium, high-end restaurant website in the United States. It should be visually impressive enough that a restaurant owner immediately imagines their own restaurant using this website and AI assistant.

Do not make this look like a generic SaaS landing page.

The website should feel:

Elegant

Cinematic

Warm

Premium

Modern

Editorial

Minimal

High-end

Use large, immersive food and restaurant imagery, elegant typography, generous spacing, subtle animations, smooth transitions, and a sophisticated layout.

Technology

Build this as a modern web application using:

React

TypeScript

Tailwind CSS

Modern component architecture

Responsive design for desktop, tablet, and mobile

The AI chatbot must be architected so that it can connect to a backend API using a Groq API key.

Do not expose the Groq API key in frontend code.

Create an environment variable:

VITE_GROQ_API_KEY

or preferably implement a secure backend/server function that handles Groq API requests so the API key remains private.

Create the chatbot integration in a modular way so the model can easily be changed later.

Use the Groq API for AI responses.

Website Structure

Create the following sections and pages.

1. Navigation

Elegant sticky navigation.

Include:

Home

Our Menu

Private Dining

Catering

About

Contact

On the right side include a prominent:

Reserve a Table

button.

The navigation should transition smoothly as the user scrolls.

HOME PAGE

Hero Section

Create a full-screen cinematic hero.

Use a premium restaurant atmosphere or beautifully plated Italian food.

Large headline:

A Table Worth Remembering.

Subheading:

Modern Italian cuisine, crafted with seasonal ingredients and served in the heart of Dallas.

Include two primary actions:

Explore the Menu

Reserve a Table

Add subtle animations and scroll indicators.

The hero should immediately communicate luxury and quality.

Experience Section

Create an editorial-style section introducing Casa Lumina.

Headline:

More Than a Meal.

Copy:

At Casa Lumina, Italian tradition meets a modern dining experience. Every dish is designed around seasonal ingredients, thoughtful technique, and the simple pleasure of gathering around a table.

Use a visually asymmetric layout with large imagery.

Signature Dishes

Show 3–6 signature dishes.

Examples:

Truffle Tagliatelle — $28

Wild Mushroom Risotto — $26

Branzino al Limone — $36

Burrata & Roasted Tomatoes — $18

48-Hour Short Rib — $42

Tiramisu Classico — $14

Each dish should have:

Image

Name

Short description

Price

Add subtle hover interactions.

Private Dining

Create a premium section promoting private events.

Headline:

Celebrate Around the Table.

Explain that Casa Lumina offers private dining for:

Corporate dinners

Birthdays

Weddings

Anniversaries

Group celebrations

Include a CTA:

Plan Your Event

Catering

Create a catering section.

Headline:

Casa Lumina, Wherever You Gather.

Mention catering for:

Corporate events

Weddings

Private parties

Office lunches

Special occasions

Include CTA:

Explore Catering

Testimonials

Add realistic-looking customer testimonials.

Use elegant typography and subtle carousel or scrolling interaction.

Location and Hours

Display:

Casa Lumina
1234 Main Street
Dallas, TX 75201

Hours:

Monday–Thursday: 5:00 PM – 10:00 PM
Friday: 5:00 PM – 11:00 PM
Saturday: 4:00 PM – 11:00 PM
Sunday: 4:00 PM – 9:00 PM

Include:

Map placeholder

Phone number

Email

Directions button

MENU PAGE

Create a beautiful menu experience.

Categories:

Antipasti

Pasta

Secondi

Desserts

Wine

Each menu item should contain:

Name

Description

Price

Dietary indicators where appropriate

Include examples for:

Vegetarian

Vegan

Gluten-free

The menu content should also be structured as restaurant data that can be provided to the AI chatbot.

PRIVATE DINING PAGE

Create a dedicated page explaining private dining.

Include:

Event types

Capacity

Sample packages

Example pricing

Gallery

Inquiry form

The inquiry form should collect:

Name

Email

Phone

Event type

Preferred date

Number of guests

Additional details

CATERING PAGE

Create a catering page.

Include:

Catering packages

Sample menu options

Minimum guest count

Event types

Inquiry form

Collect:

Name

Company if applicable

Email

Phone

Event date

Guest count

Event type

Budget range

Dietary requirements

Additional notes

AI CHATBOT — MOST IMPORTANT FEATURE

Create a fully integrated AI chatbot that feels like a native part of the Casa Lumina experience.

Do NOT make it look like a generic ChatGPT clone.

The chatbot should be presented as:

Ask Lumina

Subtitle:

Your personal dining concierge.

The chatbot should appear as a refined floating button in the bottom-right corner.

The button could include a subtle sparkle, conversation icon, or elegant restaurant-inspired symbol.

When opened, show a polished chat interface.

Initial greeting:

Welcome to Casa Lumina. I'm Lumina, your AI dining concierge. I can help you explore our menu, answer questions, plan a private event, arrange catering, or help you request a reservation.

Show suggested prompts such as:

🍝 What should I order?

📅 Book a table

🎉 Plan a private event

🍷 Wine recommendations

🚚 Catering for my event

The chatbot must support natural language conversations.

Examples:

User:

“What vegetarian dishes do you have?”

The assistant should recommend appropriate dishes from the menu.

User:

“What would you recommend for a romantic dinner?”

The assistant should provide personalized recommendations.

User:

“Do you have gluten-free options?”

The assistant should answer using the restaurant menu information.

User:

“What time do you close tonight?”

The assistant should use the operating hours.

CHATBOT KNOWLEDGE

Create a structured restaurant knowledge object containing:

Restaurant name

Description

Address

Phone

Email

Opening hours

Menu

Dietary information

Reservations information

Private dining information

Catering information

Frequently asked questions

The chatbot should receive this restaurant context with every conversation or retrieve relevant information from this structured knowledge base.

The AI should always behave as a helpful restaurant concierge.

It should not hallucinate information.

If it does not know the answer, it should politely say that it does not have that information and offer to collect the customer's contact details so the restaurant team can follow up.

AI RESERVATION FLOW

The chatbot should detect when a user wants to make a reservation.

Example:

User:

“I need a table for four tomorrow at 7 PM.”

The chatbot should intelligently collect any missing information.

Required fields:

Date

Time

Number of guests

Name

Phone or email

Create a structured reservation flow inside the chat.

When all information has been collected, display a beautiful confirmation card:

Reservation Request Received

Date
Time
Guests
Name
Contact information

Important:

For this demo, do not integrate a real reservation provider yet.

Store the reservation request locally or through a placeholder backend function.

Architect the code so that OpenTable, Resy, Toast, or another reservation API can easily be integrated later.

CATERING LEAD FLOW

If the user says something like:

“I need catering for 50 people.”

The AI should begin a structured conversation.

Collect:

Name

Company

Event date

Number of guests

Event type

Budget range

Dietary requirements

Email

Phone

Once complete, display a polished summary card.

Headline:

Your Catering Inquiry Is Ready

Then show the collected information.

The lead should be stored through a reusable function or API endpoint.

PRIVATE EVENT FLOW

If the customer asks about:

Private dining

Birthday party

Corporate dinner

Wedding event

Group booking

The chatbot should collect:

Event type

Date

Number of guests

Preferred time

Budget

Special requirements

Name

Email

Phone

Then submit the inquiry.

Display:

We'll Help Make It Special.

Your event inquiry has been received.

CHATBOT TECHNICAL IMPLEMENTATION

Create the chatbot as a reusable component.

Suggested structure:

components/restaurant-chat/

Include:

ChatWidget

ChatWindow

ChatMessage

SuggestedPrompts

ReservationFlow

CateringFlow

EventInquiryFlow

Create a service responsible for communicating with the Groq API.

The architecture should look approximately like:

Frontend Chat UI

↓

Secure API / Server Function

↓

Groq API

↓

AI Response

The system prompt for the AI should define the assistant as:

“You are Lumina, the AI dining concierge for Casa Lumina, an upscale Italian restaurant in Dallas. Your role is to help customers explore the menu, answer restaurant questions, provide accurate information, recommend dishes, assist with reservation requests, and collect leads for catering and private events. Always be warm, concise, helpful, and professional. Only use information provided in the restaurant knowledge base. Never invent menu items, pricing, availability, policies, or restaurant details.”

Use a Groq-compatible chat completion API implementation.

Keep the model configurable through an environment variable if possible.

For example:

GROQ_MODEL

The chatbot should show:

Typing indicator

Smooth message animations

Error handling

Loading state

Retry if the API fails

AI CHAT ACTIONS

The chatbot should not only respond with text.

It should support interactive UI elements inside the conversation.

Examples:

Reservation action:

Buttons or cards for:

Select date

Select time

Guest count

Catering:

Quick-select options for:

10–25 guests

25–50 guests

50–100 guests

100+ guests

Private events:

Quick options:

Birthday

Corporate

Wedding

Anniversary

Other

The chat experience should feel intelligent and interactive.

LEAD CAPTURE

Create a generic lead data structure.

Lead types:

Reservation

Catering

Private Event

General Inquiry

Structure:

lead_id

lead_type

name

email

phone

event_date

guest_count

details

created_at

status

For now, implement local storage or a mock backend abstraction.

Keep the code structured so Supabase or another database can easily be connected later.

DEMO MODE

This is important.

Create a small floating badge or subtle element somewhere in the website indicating:

AI-Powered Restaurant Experience

Do not make it intrusive.

The demo should also include a discreet footer line:

AI Concierge powered by Aqalion

Aqalion branding should be subtle because the main purpose is for the restaurant owner to imagine this as their own website.

DESIGN REQUIREMENTS

The design should be visually outstanding.

Prioritize:

Large cinematic imagery

Elegant serif typography combined with clean sans-serif text

Sophisticated spacing

Smooth scrolling

Subtle fade and reveal animations

Hover effects

Premium cards

Soft shadows

High-quality mobile experience

Avoid:

Generic SaaS layouts

Excessive gradients

Excessive rounded cards

Cheap-looking AI chatbot styling

Overuse of animations

Cluttered layouts

The website should feel comparable to a premium hospitality or luxury restaurant brand.

RESPONSIVENESS

The entire website and chatbot must work perfectly on:

Desktop

Tablet

Mobile

On mobile, the chatbot should open as an optimized near-full-screen conversational interface.

FINAL GOAL

The finished application should feel like a real restaurant website combined with a genuinely useful AI employee.

A restaurant owner viewing the demo should immediately understand:

This could replace or upgrade my current website.

The AI can answer customer questions automatically.

The AI can capture reservations and leads.

The AI can help with catering and private events.

This could reduce the workload on my staff.

I could customize this for my own restaurant.

Build the application cleanly with reusable components and structured restaurant configuration so the entire demo can later be duplicated and customized for real restaurant prospects.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://casa-lumina-aq.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fb9fdd3c-0e81-4640-bcb5-6842ed397aa0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
