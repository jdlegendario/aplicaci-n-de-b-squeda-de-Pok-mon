document.getElementById('search-button').addEventListener('click', async function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const pokemonNameElement = document.getElementById('pokemon-name');
    const pokemonIdElement = document.getElementById('pokemon-id');
    const weightElement = document.getElementById('weight');
    const heightElement = document.getElementById('height');
    const typesElement = document.getElementById('types');
    const hpElement = document.getElementById('hp');
    const attackElement = document.getElementById('attack');
    const defenseElement = document.getElementById('defense');
    const specialAttackElement = document.getElementById('special-attack');
    const specialDefenseElement = document.getElementById('special-defense');
    const speedElement = document.getElementById('speed');
    const spriteContainer = document.getElementById('sprite-container');
  
    // Limpiar contenido previo
    pokemonNameElement.textContent = '';
    pokemonIdElement.textContent = '';
    weightElement.textContent = '';
    heightElement.textContent = '';
    typesElement.innerHTML = '';
    hpElement.textContent = '';
    attackElement.textContent = '';
    defenseElement.textContent = '';
    specialAttackElement.textContent = '';
    specialDefenseElement.textContent = '';
    speedElement.textContent = '';
    spriteContainer.innerHTML = '';
  
    // Verificar entrada vacía
    if (searchInput === '') {
      alert('Pokémon not found');
      return;
    }
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      if (!response.ok) throw new Error('Pokémon not found');
      const data = await response.json();
  
      pokemonNameElement.textContent = data.name.toUpperCase();
      pokemonIdElement.textContent = `#${data.id}`;
      weightElement.textContent = `Weight: ${data.weight}`;
      heightElement.textContent = `Height: ${data.height}`;
  
      data.types.forEach(typeInfo => {
        const typeElement = document.createElement('p');
        typeElement.textContent = typeInfo.type.name.toUpperCase();
        typesElement.appendChild(typeElement);
      });
  
      hpElement.textContent = data.stats[0].base_stat;
      attackElement.textContent = data.stats[1].base_stat;
      defenseElement.textContent = data.stats[2].base_stat;
      specialAttackElement.textContent = data.stats[3].base_stat;
      specialDefenseElement.textContent = data.stats[4].base_stat;
      speedElement.textContent = data.stats[5].base_stat;
  
      const sprite = document.createElement('img');
      sprite.id = 'sprite';
      sprite.src = data.sprites.front_default;
      spriteContainer.appendChild(sprite);
  
    } catch (error) {
      alert('Pokémon not found');
    }
  });
  