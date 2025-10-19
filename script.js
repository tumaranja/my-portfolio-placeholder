const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const PARTICLES = document.querySelectorAll('.particle')
PARTICLES.forEach(P => {
    P.setAttribute('style', `
        --x: ${RANDOM(20, 80)};
        --y: ${RANDOM(20, 80)};
        --duration: ${RANDOM(6, 20)};
        --delay: ${RANDOM(1, 10)};
        --alpha: ${RANDOM(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
        --size: ${RANDOM(40, 90) / 100};
    `)
})

// EmojiBlast functionality
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.sparkle-button button');
    
    if (button) {
        button.addEventListener('click', function(e) {
            // Get button position for centered burst
            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            // Trigger emoji burst
            emojiBlast({
                emojis: ['✨'],
                position: {
                    x: 0,
                    y: 0,
                },
                duration: 2000,
                emojiCount: 8,
                physics: {
                    fontSize: { min: 14, max: 28 },
                    gravity: 0.35,
                    initialVelocities: {
                        x: { min: -80, max: 80 },
                        y: { min: -80, max: 80 }
                    }
                },
            });
        });
    }
});

// Color Picker functionality
document.addEventListener('DOMContentLoaded', function() {
    const colorCircles = document.querySelectorAll('.color-circle');
    const button = document.querySelector('.sparkle-button button');
    
    // Color configurations for each hue - matching CSS values
    const colorConfigs = {
        yellow: {
            primary: 45,
            secondary: 55,
            glow: 45,
            lightness: 50,
            background: 45
        },
        purple: {
            primary: 260,
            secondary: 270,
            glow: 260,
            lightness: 50,
            background: 260
        },
        blue: {
            primary: 220,
            secondary: 230,
            glow: 220,
            lightness: 50,
            background: 220
        },
        green: {
            primary: 120,
            secondary: 140,
            glow: 140,
            lightness: 40,
            background: 120
        },
        orange: {
            primary: 20,
            secondary: 25,
            glow: 20,
            lightness: 40,
            background: 20
        },
        red: {
            primary: 0,
            secondary: 10,
            glow: 0,
            lightness: 40,
            background: 0
        }
    };
    
    // Function to update button colors and background
    function updateButtonColors(colorName) {
        const config = colorConfigs[colorName];
        if (!config) return;
        
        // Update CSS custom properties for the button
        button.style.setProperty('--primary-hue', config.primary);
        button.style.setProperty('--secondary-hue', config.secondary);
        button.style.setProperty('--glow-hue', config.glow);
        button.style.setProperty('--lightness', config.lightness);
        
        // Update CSS custom properties for the background
        document.body.style.setProperty('--background-hue', config.background);
    }
    
    // Add click event listeners to each color circle
    colorCircles.forEach(circle => {
        circle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const colorName = this.getAttribute('data-color');
            if (colorName && colorConfigs[colorName]) {
                updateButtonColors(colorName);
                
                // Add visual feedback to the clicked circle - matching button motion
                this.style.scale = '0.95';
                setTimeout(() => {
                    this.style.scale = '';
                }, 150);
            }
        });
    });
    
    // Initialize with purple (default)
    updateButtonColors('purple');
});


