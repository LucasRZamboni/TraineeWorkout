const exerciciosSemMaquina = [
  "Agachamento Livre",
  "Flexão de Braços (Push-ups)",
  "Barra Fixa",
  "Paralelas (Dips)",
  "Abdominais (Várias variações)",
  "Prancha (Plank)",
  "Ponte (Glute Bridge)",
  "Burpees",
  "Mountain Climbers (Alpinistas)",
  "Pistol Squats (Agachamento Pistol)",
  "Lunges (Afundo)",
  "Elevação Pélvica (Hip Thrust)",
  "Step-ups (Subidas no Banco)",
  "Superman",
  "Saltos no Caixote (Box Jumps)",
  "Jumping Jacks",
  "Alpinistas (Mountain Climbers)",
  "Prancha Lateral (Side Plank)",
  "Levantamento de Pernas (Leg Raises)",
  "Russian Twist (Torção Russa)",
  "Flexão de Punho (Wrist Curl)",
  "Pullover",
  "Pullover Invertido (Reverse Pullover)",
  "Clean and Press (Arranco e Press)",
  "Overhead Squats (Agachamento sobre a Cabeça)",
  "Snatch (Arranco)",
  "Muscle Up",
  "Handstand Push-ups (Flexões de Braço em Posição de Mão)",
  "Walking Lunges (Afundo Caminhando)",
  "V-Ups",
  "Skater Jumps (Saltos de Patinador)",
  "Agachamento Sumô (Sumo Squat)",
  "Sprint (Corrida de Velocidade)",
  "Kettlebell Swing",
  "Kettlebell Snatch (Arranco com Kettlebell)",
  "Kettlebell Clean (Arranco com Kettlebell)",
  "Kettlebell Press (Press com Kettlebell)",
  "Kettlebell Goblet Squat (Agachamento com Kettlebell)",
  "Kettlebell Deadlift (Levantamento Terra com Kettlebell)",
  "Kettlebell Turkish Get-Up (Levantamento Turco com Kettlebell)",
  "Kettlebell Windmill (Moinho de Vento com Kettlebell)",
  "Pliometria com Caixa (Plyo Box)",
  "Sprint Intervalado (Interval Sprints)",
  "Farmer's Walk (Caminhada do Fazendeiro)",
  "Walking Plank (Prancha Andando)",
  "Clap Push-ups (Flexões com Palminha)",
  "Battle Ropes (Corda Naval)",
  "Medicine Ball Slams (Arremesso de Bola Medicinal)",
  "Rope Climbs (Subida na Corda)",
];

const exerciciosComMaquina = [
  "Leg Press (Leg Press)",
  "Cadeira Extensora (Leg Extension)",
  "Cadeira Flexora (Leg Curl)",
  "Pec Deck Fly (Crucifixo na Máquina)",
  "Máquina de Remada (Rowing Machine)",
  "Pulley Frente (Front Pulley)",
  "Pulley Costas (Back Pulley)",
  "Crossover (Crossover)",
  "Hack Squat (Agachamento Hack)",
  "Smith Machine Squats (Agachamento na Máquina Smith)",
  "Smith Machine Bench Press (Supino na Máquina Smith)",
  "Pec Deck Fly (Crucifixo na Máquina)",
  "Chest Press (Press de Peito)",
  "Shoulder Press (Press de Ombros)",
  "Triceps Press (Press de Tríceps)",
  "Máquina de Panturrilha (Calf Raise Machine)",
  "Abdominal na Máquina (Machine Crunches)",
  "Abductor Machine (Máquina de Abdução)",
  "Adductor Machine (Máquina de Adução)",
  "Low Row (Remada Baixa)",
  "Cable Crossovers (Crossover no Cabo)",
  "Cable Crunches (Abdominal no Cabo)",
  "Cable Bicep Curl (Rosca Bicep no Cabo)",
  "Cable Tricep Extension (Extensão de Tríceps no Cabo)",
  "Máquina de Glúteos (Glute Machine)",
  "Máquina de Abdômen (Ab Machine)",
  "Cardio Machines (Esteira, Bicicleta, Elíptico)",
  "Máquina de Costas (Lower Back Machine)",
  "Pull Down (Pulldown)",
  "Máquina de Pressão de Ombros (Shoulder Press Machine)",
  "Lat Pulldown (Pulldown para Costas)",
  "Cable Lat Pulldown (Pulldown no Cabo)",
  "Chest Fly Machine (Máquina de Crucifixo)",
  "Leg Press Invertida (Inverted Leg Press)",
  "Máquina Smith para Panturrilhas (Smith Machine Calf Raise)",
  "Máquina de Supino (Bench Press Machine)",
  "Máquina de Abdução de Quadril (Hip Abduction Machine)",
  "Máquina de Adução de Quadril (Hip Adduction Machine)",
  "Máquina de Prancha Inclinada (Incline Plank Machine)",
  "Máquina de Remada Sentada (Seated Row Machine)",
  "Máquina de Supino Vertical (Vertical Chest Press Machine)",
  "Máquina de Extensão Lombar (Back Extension Machine)",
  "Máquina de Pullover (Pullover Machine)",
  "Máquina de Abdução de Coxas (Thigh Abductor Machine)",
  "Máquina de Adução de Coxas (Thigh Adductor Machine)",
  "Máquina de Prancha Inversa (Reverse Plank Machine)",
  "Máquina de Agachamento Horizontal (Horizontal Squat Machine)",
  "Máquina de Panturrilha Sentada (Seated Calf Raise Machine)",
  "Máquina de Panturrilha em Pé (Standing Calf Raise Machine)",
];

const exerciciosPesoLivre = [
  "Supino Reto (Flat Bench Press)",
  "Supino Inclinado (Incline Bench Press)",
  "Supino Declinado (Decline Bench Press)",
  "Desenvolvimento Militar (Military Press)",
  "Rosca Direta (Barbell Curl)",
  "Rosca Martelo (Hammer Curl)",
  "Rosca Concentrada (Concentration Curl)",
  "Rosca Scott (Preacher Curl)",
  "Tríceps Francês (French Press)",
  "Tríceps Testa (Skull Crusher)",
  "Crucifixo (Dumbbell Flyes)",
  "Remada Curvada (Bent-Over Row)",
  "Levantamento Terra (Deadlift)",
  "Stiff Leg Deadlift (Levantamento Terra com Pernas Rígidas)",
  "Sumo Deadlift (Levantamento Terra Sumô)",
  "Agachamento com Barra (Barbell Squat)",
  "Front Squat (Agachamento Frontal)",
  "Arremesso (Clean)",
  "Snatch (Arranco)",
  "Thruster",
  "Power Clean (Arremesso Rápido)",
  "Hang Clean (Arremesso de Pendurado)",
  "Turkish Get-Up (Levantamento Turco)",
  "Farmer's Walk (Caminhada do Fazendeiro)",
  "Zercher Squat (Agachamento Zercher)",
  "Good Morning (Bom Dia)",
  "Remada Unilateral (One-Arm Row)",
  "Remada Cavalinho (T-Bar Row)",
  "Landmine Press (Press com Barra em T)",
  "Landmine Row (Remada com Barra em T)",
];

const tipoExercicio = document.getElementById("tipoExercicio");
const listaExercicios = document.getElementById("listaExercicios");
const diaTreino = document.getElementById("diaTreino");
const tabelaTreino = document.getElementById("tabelaTreino");

function atualizarListaExercicios() {
    listaExercicios.innerHTML = "";
    let lista = [];

    if (tipoExercicio.value === "semMaquina") {
        lista = exerciciosSemMaquina;
    } else if (tipoExercicio.value === "comMaquina") {
        lista = exerciciosComMaquina;
    } else if (tipoExercicio.value === "pesoLivre") {
        lista = exerciciosPesoLivre;
    }

    if (lista.length === 0) {
        listaExercicios.innerHTML = "<li>Selecione uma opção</li>";
        return;
    }

    lista.forEach(exercicio => {
        const li = document.createElement("li");
        li.textContent = exercicio;
        const botao = document.createElement("button");
        botao.textContent = "Adicionar";
        botao.onclick = () => adicionarAoTreino(exercicio);
        li.appendChild(botao);
        listaExercicios.appendChild(li);
    });
}
function adicionarAoTreino(exercicio) {
  const tr = document.createElement("tr");
  const tdDia = document.createElement("td");
  tdDia.textContent = diaTreino.options[diaTreino.selectedIndex].text;
  const tdExercicio = document.createElement("td");
  tdExercicio.textContent = exercicio;
  const tdAcoes = document.createElement("td");
  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.onclick = () => tr.remove();
  tdAcoes.appendChild(botaoRemover);

  tr.appendChild(tdDia);
  tr.appendChild(tdExercicio);
  tr.appendChild(tdAcoes);
  tabelaTreino.appendChild(tr);
}

tipoExercicio.addEventListener("change", atualizarListaExercicios);
atualizarListaExercicios();
