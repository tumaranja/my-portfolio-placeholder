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
        const BOUNCE_DURATION = 600;
        let bounceTimeout;

        const activateBounce = () => {
            button.classList.add('is-pointer-active');
            clearTimeout(bounceTimeout);
        };

        const deactivateBounce = () => {
            clearTimeout(bounceTimeout);
            bounceTimeout = setTimeout(() => {
                button.classList.remove('is-pointer-active');
            }, BOUNCE_DURATION);
        };

        // Mirror hover sparkle animation on touch devices.
        button.addEventListener('pointerdown', activateBounce);
        button.addEventListener('pointerup', deactivateBounce);
        button.addEventListener('pointercancel', deactivateBounce);
        button.addEventListener('pointerleave', deactivateBounce);

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

