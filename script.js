// Sample scientific publications data
const publications = [
    {
        title: "Gene Expression Analysis in Microgravity",
        authors: "Martínez et al.",
        year: 2023,
        interest: 9,
        cost: 45000,
        journal: "Nature Microgravity"
    },
    {
        title: "Effects of Cosmic Radiation on Stem Cells",
        authors: "Johnson & Lee",
        year: 2024,
        interest: 8,
        cost: 38000,
        journal: "Space Biology Reviews"
    },
    {
        title: "Tissue Growth in Spatial Conditions",
        authors: "Rodriguez et al.",
        year: 2023,
        interest: 7,
        cost: 52000,
        journal: "Tissue Engineering Space"
    },
    {
        title: "Cellular Metabolism During Long Space Travel",
        authors: "Chen & Wang",
        year: 2024,
        interest: 9,
        cost: 41000,
        journal: "Cell Metabolism in Space"
    },
    {
        title: "Molecular Biology of Extremophile Organisms",
        authors: "García-López et al.",
        year: 2023,
        interest: 6,
        cost: 29000,
        journal: "Extremophiles Research"
    },
    {
        title: "Embryonic Development in Microgravity",
        authors: "Smith & Brown",
        year: 2024,
        interest: 10,
        cost: 67000,
        journal: "Developmental Biology"
    },
    {
        title: "Muscular Adaptation in Astronauts",
        authors: "Ivanov et al.",
        year: 2023,
        interest: 7,
        cost: 35000,
        journal: "Muscle Research"
    },
    {
        title: "Plant Cultivation in Space Stations",
        authors: "Green & White",
        year: 2024,
        interest: 8,
        cost: 44000,
        journal: "Plant Space Science"
    },
    {
        title: "Bioregenerative Life Support Systems",
        authors: "Anderson et al.",
        year: 2023,
        interest: 9,
        cost: 58000,
        journal: "Life Support Systems"
    },
    {
        title: "Intestinal Microbiome in Space",
        authors: "Davis & Miller",
        year: 2024,
        interest: 7,
        cost: 33000,
        journal: "Gut Microbiome Studies"
    },
    {
        title: "Immune Response in Microgravity Conditions",
        authors: "Wilson et al.",
        year: 2023,
        interest: 8,
        cost: 47000,
        journal: "Immunology in Space"
    },
    {
        title: "Proteomics of Radiation-Exposed Cells",
        authors: "Taylor & Moore",
        year: 2024,
        interest: 6,
        cost: 39000,
        journal: "Proteomics Research"
    }
];

let currentPublications = [...publications];

// Initialize particles.js with configuration from JSON file
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "star",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Function to get interest level
function getInterestLevel(interest) {
    if (interest >= 8) return 'high';
    if (interest >= 6) return 'medium';
    return 'low';
}

function getInterestText(interest) {
    if (interest >= 8) return 'High';
    if (interest >= 6) return 'Medium';
    return 'Low';
}

// Function to render publications
function renderPublications() {
    const container = document.getElementById('publications');
    container.innerHTML = '';
    
    currentPublications.forEach((pub, index) => {
        const card = document.createElement('div');
        card.className = 'publication-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const interestLevel = getInterestLevel(pub.interest);
        const interestText = getInterestText(pub.interest);
        
        card.innerHTML = `
            <h3>${pub.title}</h3>
            <div class="publication-info">
                <div class="info-item">
                    <span>👥</span>
                    <span><strong>Authors:</strong> ${pub.authors}</span>
                </div>
                <div class="info-item">
                    <span>📅</span>
                    <span><strong>Year:</strong> ${pub.year}</span>
                </div>
                <div class="info-item">
                    <span>📚</span>
                    <span><strong>Journal:</strong> ${pub.journal}</span>
                </div>
                <div class="info-item">
                    <span>⭐</span>
                    <span><strong>Interest:</strong> ${pub.interest}/10</span>
                </div>
            </div>
            <span class="badge ${interestLevel}">Interest: ${interestText}</span>
            <div class="cost-badge">💰 $${pub.cost.toLocaleString()}</div>
        `;
        
        container.appendChild(card);
    });
    
    updateStats();
}

// Function to update statistics
function updateStats() {
    const total = currentPublications.length;
    // Calculate and format average interest
    const avgInterest = (currentPublications.reduce((sum, pub) => sum + pub.interest, 0) / total).toFixed(1);
    // Calculate and format average cost
    const avgCost = Math.round(currentPublications.reduce((sum, pub) => sum + pub.cost, 0) / total);
    
    document.getElementById('totalPubs').textContent = total;
    document.getElementById('avgInterest').textContent = `${avgInterest}/10`;
    document.getElementById('avgCost').textContent = `$${avgCost.toLocaleString()}`;
}

// Sorting functions
function sortByInterest() {
    currentPublications.sort((a, b) => b.interest - a.interest);
    renderPublications();
    setActiveButton(0);
}

function sortByCost() {
    currentPublications.sort((a, b) => a.cost - b.cost);
    renderPublications();
    setActiveButton(1);
}

function resetOrder() {
    currentPublications = [...publications];
    renderPublications();
    setActiveButton(2);
}

function setActiveButton(index) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderPublications();
});

// --- Chat Interface Logic (Modal) ---
const chatButton = document.getElementById('chatButton');
const chatModal = document.getElementById('chatModal');
const closeChatButton = document.getElementById('closeChat');
const sendMessageButton = document.getElementById('sendMessage');
const chatInput = document.getElementById('chatInput');
const chatMessagesContainer = document.getElementById('chatMessages');

// 1. Show/Hide the modal
chatButton.addEventListener('click', () => {
    chatModal.style.display = 'flex';
    // Optional: focus the input on open
    setTimeout(() => chatInput.focus(), 100);
});

closeChatButton.addEventListener('click', () => {
    chatModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === chatModal) {
        chatModal.style.display = 'none';
    }
});

// 2. Handle message sending
sendMessageButton.addEventListener('click', sendMessage);

// Allow sending when pressing Enter in the input
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});


// Helper function to append messages to the DOM
function appendMessage(role, text) {
    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${role}`;
    
    // Simple icons
    const icon = role === 'user' ? '👤' : '🤖'; 
    
    messageElement.innerHTML = `
        <span class="message-icon">${icon}</span>
        <p>${text}</p>
    `;
    
    chatMessagesContainer.appendChild(messageElement);
    // Auto-scroll to the last message
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

// --- End of Chat Interface Logic ---


// ====================================================================
// CRUCIAL FUNCTION: CONNECTING TO THE GEMINI API (MODIFIED)
// ====================================================================

// ⚠️ SECURITY WARNING:
// Placing the API key directly in this file is INSECURE
// because it's visible to any user. Using a backend server is highly recommended.
const GEMINI_API_KEY = "AIzaSyCJmpJWjgUVZkOGUSIOcjdJEDHVSjLesrs"; // <<< Your actual API Key

async function sendMessage() {
    const originalUserMessage = chatInput.value.trim();

    if (!originalUserMessage) return; 

    // --- RESTRICCIÓN TEMÁTICA IMPLEMENTADA AQUÍ ---
    const thematicInstruction = "Your sole purpose is to act as a Space Biology and NASA-related assistant. You MUST respond ONLY about NASA, space biology, space missions, or related science topics. For any other topic, you must politely decline and state that you can only answer questions about NASA and space biology. Do not break this rule. ";

    // MODIFICATION: Force the AI to respond in English and apply thematic restriction
    const userMessageWithInstructions = thematicInstruction + "Always respond in English. The user is asking: " + originalUserMessage;

    // 1. Display the user message and clear the input
    appendMessage('user', originalUserMessage); // Display the original message
    chatInput.value = '';
    
    // Disable input temporarily to prevent spam
    chatInput.disabled = true;
    sendMessageButton.disabled = true;
    
    // Show a loading message
    appendMessage('assistant', "🤖 Thinking..."); 

    try {
        // Use the GEMINI_API_KEY constant
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    // Send the message with the thematic and language instruction
                    parts: [{ text: userMessageWithInstructions }]
                }]
            })
        });

        if (!response.ok) {
            // Remove the "Thinking..." message
            if (chatMessagesContainer.lastChild) {
                chatMessagesContainer.lastChild.remove();
            }
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract the model response
        const assistantResponse = data.candidates[0].content.parts[0].text;
        
        // Remove the "Thinking..." message
        if (chatMessagesContainer.lastChild) {
            chatMessagesContainer.lastChild.remove(); 
        }
        
        // Display the assistant's response
        appendMessage('assistant', assistantResponse);

    } catch (error) {
        console.error("Error connecting to Gemini API:", error);
        // Show the error in the chat if it's a connection/API error
        if (chatMessagesContainer.lastChild && chatMessagesContainer.lastChild.textContent.includes("Thinking")) {
            chatMessagesContainer.lastChild.remove(); 
        }
        // English error message for consistency
        appendMessage('assistant', `Error: Could not connect to the AI. Details: ${error.message}. Check your API key and ensure the connection is served from a server (not file://).`);
    } finally {
        // Enable the input again
        chatInput.disabled = false;
        sendMessageButton.disabled = false;
        chatInput.focus();
    }
}