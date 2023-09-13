const blockSelect = document.getElementById("blockSelect");
const blockItemImage = document.getElementById("blockItemImage");
const blockDescription = document.getElementById("blockDescription");
const craftRecipe = document.getElementById("craftRecipe");
const blocksAndItems = [
        // Blocos e itens...
    {
        name: "Pedra",
        image: "file:///F:/Minecraft/Itens/Pedra.jpg",
        description: "Uma rocha sólida."
    },
    {
        name: "Pedregulho",
        image: "file:///F:/Minecraft/Itens/Pedregulho.jpg",
        description: "Um bloco mais áspero e com menos utilidades."
    },
    {
        name: "Palito",
        image: "file:///F:/Minecraft/Itens/Palito.jpg",
        description: "Palito usado para muitos crafts."
    },
    {
        name: "Couro",
        image: "file:///F:/Minecraft/Itens/Couro.jpg",
        description: "Bota forte."
    },
    {
        name: "Ferro",
        image: "file:///F:/Minecraft/Itens/Iron.jpg",
        description: "Bota forte."
    },
    {
        name: "Ouro",
        image: "file:///F:/Minecraft/Itens/Ouro.jpg",
        description: "Bota forte."
    },
    {
        name: "Diamante",
        image: "file:///F:/Minecraft/Itens/Diamante.jpg",
        description: "Minerio muito rico."
    },

    {
        name: "Carvao",
        image: "file:///F:/Minecraft/Itens/Carvao.jpg",
        description: "Material para queimar na fornalha."
    },
    {
        name: "CapaceteCouro",
        image: "file:///F:/Minecraft/Itens/CapaceteCouro.jpg",
        description: "Fraco pouca proteção."
    },
    {
        name: "PeitoralCouro",
        image: "file:///F:/Minecraft/Itens/PeitoralCouro.jpg",
        description: "Fraco pouca proteção."
    },
    {
        name: "CalcaCouro",
        image: "file:///F:/Minecraft/Itens/CalcaCouro.jpg",
        description: "Fraco pouca proteção."
    },
    {
        name: "BotaCouro",
        image: "file:///F:/Minecraft/Itens/BotaCouro.jpg",
        description: "Fraco pouca proteção."
    },
    {
        name: "CapaceteFerro",
        image: "file:///F:/Minecraft/Itens/CapaceteFerro.jpg",
        description: "Mediano"
    },
    {
        name: "PeitoralFerro",
        image: "file:///F:/Minecraft/Itens/PeitoralFerro.jpg",
        description: "Mediano"
    },
    {
        name: "CalcaFerro",
        image: "file:///F:/Minecraft/Itens/CalcaFerro.jpg",
        description: "Mediano"
    },
    {
        name: "BotaFerro",
        image: "file:///F:/Minecraft/Itens/BotaFerro.jpg",
        description: "Mediano"
    },
    {
        name: "CapaceteOuro",
        image: "file:///F:/Minecraft/Itens/CapaceteOuro.jpg",
        description: "Forte, Pouca Durabilidade"
    },
    {
        name: "PeitoralOuro",
        image: "file:///F:/Minecraft/Itens/PeitoralOuro.jpg",
        description: "Forte, Pouca Durabilidade"
    },
    {
        name: "CalcaOuro",
        image: "file:///F:/Minecraft/Itens/CalcaOuro.jpg",
        description: "Forte, Pouca Durabilidade"
    },
    {
        name: "BotaOuro",
        image: "file:///F:/Minecraft/Itens/BotaOuro.jpg",
        description: "Forte, Pouca Durabilidade"
    },
    {
        name: "CapaceteDiamante",
        image: "file:///F:/Minecraft/Itens/Capacete_Diamante.jpg",
        description: "Capacete forte."
    },
    {
        name: "PeitoralDiamante",
        image: "file:///F:/Minecraft/Itens/Peitoral_Diamante.jpg",
        description: "Peitoral forte."
    },
    {
        name: "CalcaDiamante",
        image: "file:///F:/Minecraft/Itens/Calca_Diamante.jpg",
        description: "Calca forte."
    },
    {
        name: "BotaDiamante",
        image: "file:///F:/Minecraft/Itens/Bota_Diamante.jpg",
        description: "Bota forte."
    },
    {
        name: "EspadaDiamante",
        image: "file:///F:/Minecraft/Itens/Espada_Diamante.jpg",
        description: "Bota forte."
    },
    {
        name: "MachadoDiamante",
        image: "file:///F:/Minecraft/Itens/Machado_Diamante.jpg",
        description: "Bota forte."
    },
    {
        name: "PicaretaDiamante",
        image: "file:///F:/Minecraft/Itens/Picareta_Diamante.jpg",
        description: "Bota forte."
    },
    {
        name: "PaDiamante",
        image: "file:///F:/Minecraft/Itens/Pa_Diamante.jpg",
        description: "Bota forte."
    },
    {
        name: "EnxadaDiamante",
        image: "file:///F:/Minecraft/Itens/Enxada_Diamante.jpg",
        description: "Bota forte."
    },
];

const recipes = {
        // Crafts...

    "Pedra": "[] [] [] [] [] [] [] [] []",

    "CapaceteCouro": "[Couro] [Couro] [Couro] [Couro] [] [Couro] [] [] []",
    "PeitoralCouro": "[Couro] [] [Couro] [Couro] [Couro] [Couro] [Couro] [Couro] [Couro]",
    "CalcaCouro": "[Couro] [Couro] [Couro] [Couro] [] [Couro] [Couro] [] [Couro]",
    "BotaCouro": "[Couro] [] [Couro] [Couro] [] [Couro] [] [] []",

    "CapaceteFerro": "[Ferro] [Ferro] [Ferro] [Ferro] [] [Ferro] [] [] []",
    "PeitoralFerro": "[Ferro] [] [Ferro] [Ferro] [Ferro] [Ferro] [Ferro] [Ferro] [Ferro]",
    "CalcaFerro": "[Ferro] [Ferro] [Ferro] [Ferro] [] [Ferro] [Ferro] [] [Ferro]",
    "BotaFerro": "[Ferro] [] [Ferro] [Ferro] [] [Ferro] [] [] []",

    "CapaceteOuro": "[Ouro] [Ouro] [Ouro] [Ouro] [] [Ouro] [] [] []",
    "PeitoralOuro": "[Ouro] [] [Ouro] [Ouro] [Ouro] [Ouro] [Ouro] [Ouro] [Ouro]",
    "CalcaOuro": "[Ouro] [Ouro] [Ouro] [Ouro] [] [Ouro] [Ouro] [] [Ouro]",
    "BotaOuro": "[Ouro] [] [Ouro] [Ouro] [] [Ouro] [] [] []",

    "CapaceteDiamante": "[Diamante] [Diamante] [Diamante] [Diamante] [] [Diamante] [] [] []",
    "PeitoralDiamante": "[Diamante] [] [Diamante] [Diamante] [Diamante] [Diamante] [Diamante] [Diamante] [Diamante]",
    "CalcaDiamante": "[Diamante] [Diamante] [Diamante] [Diamante] [] [Diamante] [Diamante] [] [Diamante]",
    "BotaDiamante": "[Diamante] [] [Diamante] [Diamante] [] [Diamante] [] [] []",
    "EspadaDiamante": "[] [Diamante] [] [] [Diamante] [] [] [Palito] []",
    "MachadoDiamante": "[] [Diamante] [Diamante] [] [Palito] [Diamante] [] [Palito] []",
    "PicaretaDiamante": "[Diamante] [Diamante] [Diamante] [] [Palito] [] [] [Palito] []",
    "PaDiamante": "[] [Diamante] [] [] [Palito] [] [] [Palito] []",
    "EnxadaDiamante": "[] [Diamante] [Diamante] [] [Palito] [] [] [Palito] []",

};

blocksAndItems.forEach(blockItem => {
    const option = document.createElement("option");
    option.value = blockItem.name;
    option.textContent = blockItem.name;
    blockSelect.appendChild(option);
});

blockSelect.addEventListener("change", () => {
    const selectedBlockItem = blocksAndItems.find(item => item.name === blockSelect.value);
    
    if (selectedBlockItem) {
        blockDescription.textContent = selectedBlockItem.description;
        blockItemImage.src = selectedBlockItem.image;
        displayCraftRecipe(recipes[selectedBlockItem.name]); // Exibe a receita da crafting
    } else {
        blockDescription.textContent = "Selecione um bloco ou item.";
        blockItemImage.src = "";
        craftRecipe.innerHTML = ""; // Limpa a receita da crafting
    }
});

function displayCraftRecipe(recipe) {
    const items = recipe ? recipe.split(" ") : [];
    craftRecipe.innerHTML = "";

    for (let i = 0; i < 9; i++) {
        const item = items[i] || "";
        const itemElement = document.createElement("div");
        itemElement.classList.add("craft-item");

        if (item.startsWith("[")) {
            const itemName = item.substring(1, item.length - 1);
            const itemInfo = blocksAndItems.find(item => item.name === itemName);

            if (itemInfo) {
                const itemImage = new Image(); // Use a API Image para garantir o carregamento correto
                itemImage.src = itemInfo.image;
                itemImage.alt = itemName;
                itemImage.className = "craft-icon"; // Adiciona uma classe para estilização
                itemElement.appendChild(itemImage);
            }
        }

        craftRecipe.appendChild(itemElement);
    }
}