/**
 * OnePercent (onepercent.co.in) - Interactive Client Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('bx-menu-alt-right');
                icon.classList.toggle('bx-x');
            }
        });

        // Close menu & update breadcrumb on nav link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('bx-menu-alt-right');
                    icon.classList.remove('bx-x');
                }

                // Update active link & breadcrumb
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                const crumbText = document.getElementById('active-crumb-text');
                if (crumbText) {
                    crumbText.textContent = link.textContent.trim();
                }
            });
        });
    }

    // 2. Active Header State & Section Scroll Spy for Breadcrumb
    const header = document.getElementById('site-header');
    const crumbText = document.getElementById('active-crumb-text');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.7)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Scroll spy to update active section in header & breadcrumb
        let currentSectionId = '';
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            const sectionHeight = sec.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        if (currentSectionId) {
            const matchingLink = document.querySelector(`.nav-link[href="#${currentSectionId}"]`);
            if (matchingLink) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                matchingLink.classList.add('active');
                if (crumbText) {
                    crumbText.textContent = matchingLink.textContent.trim();
                }
            }
        }
    });

    // 3. Hero Animated Counters
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimatedStats = false;

    const animateStats = () => {
        statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'), 10);
            let current = 0;
            const increment = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    num.textContent = target;
                    clearInterval(timer);
                } else {
                    num.textContent = current;
                }
            }, 30);
        });
    };

    // Trigger stats animation when hero section enters viewport
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedStats) {
                    hasAnimatedStats = true;
                    animateStats();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(heroSection);
    }

    // 4. Interactive SAP BTP Visualizer Nodes
    const satNodes = document.querySelectorAll('.sat-node');
    const nodeTooltip = document.getElementById('node-tooltip');

    satNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            const info = node.getAttribute('data-info');
            if (nodeTooltip && info) {
                nodeTooltip.textContent = info;
                nodeTooltip.style.borderColor = '#C6FF3B';
                nodeTooltip.style.color = '#FFFFFF';
            }
        });

        node.addEventListener('mouseleave', () => {
            if (nodeTooltip) {
                nodeTooltip.textContent = 'Hover over nodes to explore SAP BTP capabilities.';
                nodeTooltip.style.borderColor = '#C6FF3B';
                nodeTooltip.style.color = '#C6FF3B';
            }
        });
    });

    // 5. Open Source Repository Filter Tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const repoCards = document.querySelectorAll('.repo-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            repoCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. Project Consultation Modal Logic
    const consultationModal = document.getElementById('consultation-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const openModalTriggers = document.querySelectorAll('#open-consultation-btn, #hero-consultation-btn, .open-modal-trigger');
    const consultationForm = document.getElementById('consultation-form');
    const formSuccessMsg = document.getElementById('form-success-msg');

    const openModal = () => {
        if (consultationModal) {
            consultationModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        if (consultationModal) {
            consultationModal.classList.remove('active');
            document.body.style.overflow = '';
            // Reset form status after closing
            setTimeout(() => {
                if (consultationForm) consultationForm.style.display = 'flex';
                if (formSuccessMsg) formSuccessMsg.style.display = 'none';
            }, 300);
        }
    };

    openModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (consultationModal) {
        consultationModal.addEventListener('click', (e) => {
            if (e.target === consultationModal) {
                closeModal();
            }
        });
    }

    // Form Submission Handling — mailto: fallback (zero-backend)
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Gather field values
            const name    = (document.getElementById('client-name')?.value  || '').trim();
            const email   = (document.getElementById('client-email')?.value || '').trim();
            const domain  = (() => {
                const sel = document.getElementById('btp-domain');
                return sel ? sel.options[sel.selectedIndex]?.text : '';
            })();
            const notes   = (document.getElementById('project-notes')?.value || '').trim();

            // Build email body
            const body = [
                `Hi OnePercent Team,`,
                ``,
                `I'd like to discuss an SAP BTP project. Here are my details:`,
                ``,
                `Name:           ${name}`,
                `Email:          ${email}`,
                `BTP Focus Area: ${domain}`,
                ``,
                `Project Description:`,
                notes || '(No description provided)',
                ``,
                `Looking forward to hearing from you.`,
                ``,
                `Best regards,`,
                name,
            ].join('\n');

            const subject = `SAP BTP Project Inquiry – ${domain}`;

            // Open pre-filled email in the visitor's mail client
            const mailtoLink = `mailto:contact@onepercent.co.in`
                + `?subject=${encodeURIComponent(subject)}`
                + `&body=${encodeURIComponent(body)}`;

            window.location.href = mailtoLink;

            // Show success message in modal
            consultationForm.style.display = 'none';
            if (formSuccessMsg) formSuccessMsg.style.display = 'block';

            // Auto-close modal after 4 seconds
            setTimeout(() => {
                closeModal();
            }, 4000);
        });
    }
});
