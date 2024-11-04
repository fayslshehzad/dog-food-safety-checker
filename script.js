const foodData = {
    "human-food": {
        "almonds": {
            "safe": "No",
            "explanation": "Almonds can block the esophagus or tear the windpipe if not chewed completely.",
            "alternatives": "Avoid feeding almonds to dogs."
        },
        "bread": {
            "safe": "Yes",
            "explanation": "Plain bread in small amounts is safe, but has no nutritional value.",
            "alternatives": "Homemade bread is better."
        },
        "cashews": {
            "safe": "Yes",
            "explanation": "Cashews are safe in small amounts and provide nutrients like calcium and magnesium.",
            "alternatives": "Ensure they are unsalted and fed in moderation."
        },
        "cheese": {
            "safe": "Yes",
            "explanation": "Cheese is safe in small amounts unless the dog is lactose intolerant.",
            "alternatives": "Opt for low-fat cheeses like cottage cheese or mozzarella."
        },
        "chocolate": {
            "safe": "No",
            "explanation": "Contains methylxanthines that can disrupt a dog's metabolic process and be fatal.",
            "alternatives": "Never give chocolate; use dog-safe treats instead."
        },
        "cinnamon": {
            "safe": "No",
            "explanation": "Cinnamon can cause irritation and health issues such as diarrhea and vomiting.",
            "alternatives": "Avoid cinnamon; other natural flavors like small amounts of plain pumpkin are safer."
        },
        "coconut": {
            "safe": "Yes",
            "explanation": "Coconut contains lauric acid, which can help with bad breath and skin conditions.",
            "alternatives": "Coconut oil and milk are also safe in moderation."
        },
        "corn": {
            "safe": "Yes",
            "explanation": "Corn is safe for dogs as long as it is off the cob.",
            "alternatives": "Offer plain, cooked corn as a treat."
        },
        "eggs": {
            "safe": "Yes",
            "explanation": "Eggs are a great source of protein if fully cooked.",
            "alternatives": "Cooked egg whites are best; avoid raw eggs."
        },
        "fish": {
            "safe": "Yes",
            "explanation": "Fish, such as salmon and sardines, provide omega-3 and other nutrients when cooked.",
            "alternatives": "Avoid raw or undercooked fish and remove any bones."
        },
        "garlic": {
            "safe": "No",
            "explanation": "Garlic is toxic and can cause anemia in dogs.",
            "alternatives": "Use dog-safe seasonings or avoid entirely."
        },
        "ham": {
            "safe": "Yes",
            "explanation": "Ham can be eaten in small amounts but is high in sodium and fat.",
            "alternatives": "Limit to occasional treats and opt for lean meats."
        },
        "honey": {
            "safe": "Yes",
            "explanation": "Honey contains vitamins and antioxidants and can help with allergies.",
            "alternatives": "Use in small amounts as a natural sweetener."
        },
        "ice cream": {
            "safe": "No",
            "explanation": "Ice cream contains sugar and lactose, which can upset a dog's stomach.",
            "alternatives": "Offer frozen fruit pieces as a treat instead."
        },
        "macadamia nuts": {
            "safe": "No",
            "explanation": "Macadamia nuts are toxic and can affect a dog's nervous system.",
            "alternatives": "Never feed macadamia nuts; use dog-safe treats."
        },
        "milk": {
            "safe": "Yes",
            "explanation": "Milk is safe for dogs in small amounts, but watch for signs of lactose intolerance.",
            "alternatives": "Offer lactose-free milk if necessary."
        },
        "peanut butter": {
            "safe": "Yes",
            "explanation": "Peanut butter is a good source of protein and healthy fats if unsalted and without xylitol.",
            "alternatives": "Check the label to ensure it is safe."
        },
        "peanuts": {
            "safe": "Yes",
            "explanation": "Peanuts are safe in moderation, but avoid salted ones.",
            "alternatives": "Use plain, unsalted peanuts for a treat."
        },
        "popcorn": {
            "safe": "Yes",
            "explanation": "Plain, air-popped popcorn is safe in moderation.",
            "alternatives": "Ensure there are no unpopped kernels and avoid butter and salt."
        },
        "pork": {
            "safe": "Yes",
            "explanation": "Pork is a digestible protein source, but should be plain and cooked.",
            "alternatives": "Avoid fatty cuts and seasonings."
        },
        "quinoa": {
            "safe": "Yes",
            "explanation": "Quinoa is healthy and found in some dog foods.",
            "alternatives": "Cooked plain quinoa is best."
        },
        "salmon": {
            "safe": "Yes",
            "explanation": "Cooked salmon is a good source of protein and healthy fats.",
            "alternatives": "Ensure it is thoroughly cooked to avoid parasites."
        },
        "shrimp": {
            "safe": "Yes",
            "explanation": "Cooked shrimp is high in nutrients and low in fat.",
            "alternatives": "Remove the shell and serve in moderation."
        },
        "tuna": {
            "safe": "Yes",
            "explanation": "Cooked, fresh tuna is rich in omega-3 fatty acids.",
            "alternatives": "Limit to small amounts and avoid spices."
        },
        "turkey": {
            "safe": "Yes",
            "explanation": "Turkey is safe if cooked and bones/skin are removed.",
            "alternatives": "Serve plain, without seasonings."
        },
        "wheat grains": {
            "safe": "Yes",
            "explanation": "Wheat and grains are safe and can be nutritious unless a dog has specific allergies.",
            "alternatives": "Use gluten-free grains if needed."
        },
        "yogurt": {
            "safe": "Yes",
            "explanation": "Plain yogurt is a healthy snack that can aid digestion.",
            "alternatives": "Avoid yogurts with added sugar or artificial sweeteners."
        }
    },
    "vegetable": {
        "asparagus": {
            "safe": "No",
            "explanation": "Asparagus isn’t necessarily unsafe for dogs, but it offers no benefit. It's too tough to eat raw and loses nutritional value when cooked.",
            "alternatives": "Consider other vegetables for your dog."
        },
        "broccoli": {
            "safe": "Yes",
            "explanation": "Safe in small amounts; high in fiber and vitamin C, but can cause gastric irritation. Cooked broccoli is preferred.",
            "alternatives": "Offer cooked broccoli to avoid potential choking hazards."
        },
        "brussels sprouts": {
            "safe": "Yes",
            "explanation": "Loaded with nutrients and antioxidants, but can cause gas if overfed.",
            "alternatives": "Moderation is key; consider dehydrated foods with these greens."
        },
        "carrots": {
            "safe": "Yes",
            "explanation": "A low-calorie snack high in fiber and vitamin A; good for dental health.",
            "alternatives": "Carrots are often included in dog foods and treats."
        },
        "celery": {
            "safe": "Yes",
            "explanation": "Contains vitamins A, B, and C; promotes heart health and freshens breath.",
            "alternatives": "Celery dog chews are a fun option."
        },
        "green beans": {
            "safe": "Yes",
            "explanation": "All types are safe as long as they are plain; low in calories and high in fiber.",
            "alternatives": "Try fresh or frozen green beans for snacks."
        },
        "mushrooms": {
            "safe": "No",
            "explanation": "Wild mushrooms can be toxic; supermarket mushrooms are generally safe.",
            "alternatives": "Avoid feeding mushrooms to your dog."
        },
        "onions": {
            "safe": "No",
            "explanation": "Onions are toxic to dogs and can cause severe health issues.",
            "alternatives": "Keep all onion-containing foods away from your dog."
        },
        "peas": {
            "safe": "Yes",
            "explanation": "All types are safe; rich in vitamins, minerals, protein, and fiber.",
            "alternatives": "Fresh or frozen peas are great, avoid canned with added sodium."
        },
        "spinach": {
            "safe": "Yes",
            "explanation": "Safe but not recommended often due to high oxalic acid which can block calcium absorption.",
            "alternatives": "Opt for spinach dog treats instead."
        }
    },
   "fruit": {
        "apples": {
            "safe": "Yes",
            "explanation": "Remove seeds and core before giving to dogs. Apples are an excellent source of vitamins A and C, as well as fiber.",
            "alternatives": "Try them frozen for an icy warm weather snack."
        },
        "avocado": {
            "safe": "No",
            "explanation": "The pit, skin, and leaves contain persin, which is toxic to dogs.",
            "alternatives": "Look for dog treats that include avocado for skin and coat benefits."
        },
        "bananas": {
            "safe": "Yes",
            "explanation": "In moderation, bananas are a low-calorie treat high in potassium, vitamins, and fiber.",
            "alternatives": "Use as an occasional treat due to high sugar content."
        },
        "blueberries": {
            "safe": "Yes",
            "explanation": "Rich in antioxidants and fiber, they make a great treat for dogs.",
            "alternatives": "Try blueberry dog treats."
        },
        "cantaloupe": {
            "safe": "Yes",
            "explanation": "Packed with nutrients and low in calories; share in moderation due to sugar content.",
            "alternatives": "Freeze balls or cubes for a refreshing snack."
        },
        "cherries": {
            "safe": "No",
            "explanation": "The pit contains cyanide and can be toxic; the flesh is okay.",
            "alternatives": "Use cherry dog treats instead."
        },
        "cranberries": {
            "safe": "Yes",
            "explanation": "Safe in small quantities, but moderation is key to avoid upset stomach.",
            "alternatives": "Opt for unsweetened fresh or frozen cranberries."
        },
        "cucumbers": {
            "safe": "Yes",
            "explanation": "Low in calories and high in hydration, making them a great snack.",
            "alternatives": "Cool cucumbers are excellent hot weather treats."
        },
        "grapes": {
            "safe": "No",
            "explanation": "Highly toxic and can cause sudden kidney failure in dogs.",
            "alternatives": "Always keep grapes and raisins out of reach."
        },
        "mango": {
            "safe": "Yes",
            "explanation": "Rich in vitamins, but remove the pit first as it can be a choking hazard.",
            "alternatives": "Mango dog treats are a less messy option."
        },
        "oranges": {
            "safe": "Yes",
            "explanation": "High in vitamin C; dogs may not like the strong citrus smell.",
            "alternatives": "Only offer the flesh, not the peel."
        },
        "peaches": {
            "safe": "Yes",
            "explanation": "Fresh peach flesh is safe but remove the pit due to cyanide content.",
            "alternatives": "Avoid canned peaches in sugary syrups."
        },
        "pears": {
            "safe": "Yes",
            "explanation": "High in vitamins and fiber; remove the pit and seeds first.",
            "alternatives": "Avoid canned pears with sugary syrups."
        },
        "pineapple": {
            "safe": "Yes",
            "explanation": "Full of vitamins and fiber; remove the skin and crown first.",
            "alternatives": "Opt for fresh over canned pineapple in syrup."
        },
        "pumpkin": {
            "safe": "Yes",
            "explanation": "Great for digestion, full of antioxidants; use pure pumpkin puree.",
            "alternatives": "Pumpkin dog treats are widely available."
        },
        "raspberries": {
            "safe": "Yes",
            "explanation": "Low in sugar and high in fiber; limit to eight ounces at a time.",
            "alternatives": "Raspberry dog treats are also available."
        },
        "strawberries": {
            "safe": "Yes",
            "explanation": "High in fiber and vitamin C; offer in moderation due to natural sugar content.",
            "alternatives": "Frozen strawberries are a fun treat."
        },
        "tomatoes": {
            "safe": "No",
            "explanation": "Ripened tomato flesh is okay, but green parts contain solanine.",
            "alternatives": "Use dog-safe tomato treats."
        },
        "watermelon": {
            "safe": "Yes",
            "explanation": "Hydrating and safe, but remove seeds and rind first.",
            "alternatives": "Frozen watermelon chunks make a great summer treat."
        }
    }
};

const categorySelect = document.getElementById('category-select');
const foodInput = document.getElementById('food-input');
const suggestionsDropdown = document.getElementById('suggestions');
const submitBtn = document.getElementById('submit-btn');
const infoDiv = document.getElementById('info');

// Function to show all suggestions or filter them
function updateSuggestions(showAll = false) {
    const category = categorySelect.value;
    const inputValue = foodInput.value.toLowerCase(); // Convert input to lowercase for comparison
    suggestionsDropdown.innerHTML = ''; // Clear previous suggestions

    if (category) {
        const foodItems = Object.keys(foodData[category]);
        const filteredItems = showAll 
            ? foodItems // Show all items if showAll is true
            : foodItems.filter(item => item.toLowerCase().includes(inputValue)); // Filter items based on lowercase input

        filteredItems.forEach(item => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = item; // Display item with original casing
            suggestionDiv.classList.add('suggestion-item');
            suggestionDiv.onmousedown = () => { // Use mousedown instead of click
                foodInput.value = item; // Set the input value with original case
                suggestionsDropdown.innerHTML = ''; // Clear suggestions
                suggestionsDropdown.style.display = 'none'; // Hide dropdown after selection
            };
            suggestionsDropdown.appendChild(suggestionDiv);
        });

        suggestionsDropdown.style.display = filteredItems.length ? 'block' : 'none'; // Show dropdown only if there are matches
    } else {
        suggestionsDropdown.style.display = 'none'; // Hide dropdown if no category
    }
}

// Show all suggestions when input is clicked
foodInput.addEventListener('click', () => {
    const category = categorySelect.value;
    if (category) {
        updateSuggestions(true); // Show all items on click
    }
});

// Listen for input in the food input field to filter suggestions
foodInput.addEventListener('input', () => updateSuggestions());

// Delay hiding suggestions to allow selection with mousedown
foodInput.addEventListener('focusout', () => {
    setTimeout(() => {
        suggestionsDropdown.style.display = 'none';
    }, 150); // Small delay to allow selection
});

// Handle category change to reset suggestions
categorySelect.addEventListener('change', () => {
    foodInput.value = ''; // Clear input when category changes
    suggestionsDropdown.innerHTML = ''; // Clear suggestions
    suggestionsDropdown.style.display = 'none'; // Hide dropdown
});

// Handle submit button click
submitBtn.addEventListener('click', () => {
    const category = categorySelect.value;
    const food = foodInput.value.toLowerCase();

    if (category && food && foodData[category][food]) {
        const foodInfo = foodData[category][food];
        const safetyMessage = foodInfo.safe === "Yes" ? "It's safe for dogs!" : "It's not safe for dogs!";
        infoDiv.innerHTML = `<strong>${food.charAt(0).toUpperCase() + food.slice(1)}</strong>: ${safetyMessage}<br>
                             <strong>Explanation:</strong> ${foodInfo.explanation}<br>
                             <strong>Alternatives:</strong> ${foodInfo.alternatives}`;
        infoDiv.style.display = 'block'; // Show the result div
    } else {
        infoDiv.innerHTML = "Please select a valid food item from the list.";
        infoDiv.style.display = 'block'; // Show the result div even for invalid input
    }
});