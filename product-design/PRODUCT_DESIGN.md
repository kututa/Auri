# Product Design: Auri

This document captures the product design for Auri — goals, user needs, features, and a roadmap for implementation.

## Overview
Auri is a portfolio / product site built with Next.js and Tailwind. This document outlines the product vision, target users, and prioritized features needed to create a polished, accessible, and high-converting web presence.

## Vision
Deliver a fast, beautiful, and responsive site that showcases work, enables contact/subscription, and converts visitors into leads.

## Goals
- Present a compelling portfolio and case studies
- Increase visitor engagement (time on page, clicks to contact/subscribe)
- Improve conversion rate for contact & newsletter
- Maintain accessibility and performance best practices

## Target Personas
- Creative Director: wants to evaluate skills and previous work quickly
- Recruiter / Hiring Manager: looks for credibility and contact options
- Potential Client: evaluates fit for project work and reachability
- Peers / Community: interested in process and learning resources

## Key Features
- Hero with prominent call-to-action
- Featured work gallery with case studies
- Work detail pages with images, process, and results
- Contact form with spam protection
- Newsletter subscription flow (email capture + thank you)
- Responsive navigation and footer
- Performance and accessibility testing

## Content Strategy
- Short, skimmable headlines and concise case studies
- High-quality images with alt text
- Clear CTAs (Contact / Subscribe)

## Metrics for Success
- Conversion rate: contact form submissions / visits
- Newsletter signups per month
- Average session duration
- Accessibility score (axe/lighthouse)

## Wireframes & UX notes
- Home: hero -> featured work -> testimonials -> subscribe -> footer
- Work listing: grid with quick filters
- Work detail: image gallery, problem -> approach -> impact

## Implementation Milestones
1. Basic site scaffolding and layout (header, footer, responsive styles)
2. Featured work components and listing
3. Work detail pages and image optimization
4. Contact & subscribe flows with serverless endpoints
5. Accessibility & performance audit, fixes
6. Launch & monitor metrics

## Risks & Mitigations
- Image-heavy pages causing slow loads: use optimized images, lazy load, and CDN
- Low conversion: A/B test CTAs and copy

## Next Steps
- Create content inventory (text & images for each case study)
- Wireframe high-priority pages in Figma or another tool
- Implement milestone 1 and run lighthouse audits

---

Maintainer: Project owner
Last updated: 2025-10-03
