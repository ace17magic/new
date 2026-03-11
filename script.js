 // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = navLinks.classList.toggle('active');
            this.setAttribute('aria-expanded', isExpanded);
            
            const icon = this.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Set active link on click
        navItems.forEach(item => {
            item.addEventListener('click', function(e) {
                navItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Search functionality
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                    this.value = '';
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 767 && navLinks.classList.contains('active')) {
                if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-toggle')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });