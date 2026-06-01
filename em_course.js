/* =========================================================================
   EM_COURSE.JS - Core Content & Visualizer Logic for Electricity & Magnetism
   ========================================================================= */

// --- 1. Menu Structure for Sidebar ---
const emMenuStructure = [
    {
        section: "Unit I: Electrostatics",
        items: [
            { id: "em-ch1", label: "Ch 1: Electric Field Intensity", icon: "fa-bolt" },
            { id: "em-ch2", label: "Ch 2: Flux & Gauss's Theorem", icon: "fa-expand" },
            { id: "em-ch3", label: "Ch 3: Applications of Gauss's Law", icon: "fa-circle-nodes" },
            { id: "em-ch4", label: "Ch 4: Potential & Potential Energy", icon: "fa-battery-half" },
            { id: "em-ch5", label: "Ch 5: Electric Dipole (10-Mark)", icon: "fa-arrows-left-right" },
            { id: "em-ch6", label: "Ch 6: Dielectrics & Polarization", icon: "fa-magnet" }
        ]
    },
    {
        section: "Unit II: Magnetostatics",
        items: [
            { id: "em-ch7", label: "Ch 7: Magnetic Field & Force", icon: "fa-compass" },
            { id: "em-ch8", label: "Ch 8: Biot-Savart Law", icon: "fa-wave-square" },
            { id: "em-ch9", label: "Ch 9: Axial Loop Field (10-Mark)", icon: "fa-circle-notch" },
            { id: "em-ch10", label: "Ch 10: Ampere's Law & Solenoid", icon: "fa-align-justify" },
            { id: "em-ch11", label: "Ch 11: Magnetic Materials", icon: "fa-gem" }
        ]
    },
    {
        section: "Unit III: Electrodynamics & Networks",
        items: [
            { id: "em-ch12", label: "Ch 12: Electromagnetic Induction", icon: "fa-retweet" },
            { id: "em-ch13", label: "Ch 13: Maxwell's Equations", icon: "fa-equals" },
            { id: "em-ch14", label: "Ch 14: Network Theorems", icon: "fa-diagram-project" }
        ]
    }
];

// --- 2. 14 Chapters Detailed Content ---
const emChapterData = {
    "em-ch1": {
        title: "Electric Field Intensity (Most Important Foundation)",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum Physics ka sabse fundamental aur high-yield topic shuru karne ja rahe hain: <b>Electric Field Intensity</b>. Agar aapne is concept ko dil se samajh liya, toh aage ki topics (Gauss Law, Dipole, Potential, Capacitors) aapke liye bohot aasan ho jayengi!</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Definition: Electric Field</h4>
                    <p>The region around a charged body where another test charge experiences an electric force is called an <b>Electric Field</b>.</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Samjho Shuru Se (Hinglish Explanation)</h4>
                    <p>Socho ki aapke paas ek bada positive charge $+Q$ rakha hai aur thodi doori par ek chota charge $+q$ hai. Bina kisi physical contact ke $+Q$ ko kaise pata chalta hai ki $+q$ wahan exist karta hai? </p>
                    <p>Is door-action (action-at-a-distance) ko explain karne ke liye physicists ne <b>Electric Field</b> ka concept diya. $+Q$ apne charo taraf ek invisible field create karta hai, aur jab $+q$ us field me enter karta hai, toh use ek strong force experience hota hai!</p>
                </div>

                <h2>Electric Field Intensity (Field Strength)</h2>
                <p>Electric field intensity ($\vec{E}$) at any point is defined as the force experienced per unit positive test charge placed at that point:</p>
                <p>$$E = \\frac{F}{q_0}$$</p>
                <p>Jahan $F$ experienced electrostatic force hai aur $q_0$ humari positive test charge hai.</p>
                
                <div class="theorem-card">
                    <h4><i class="fa-solid fa-square-poll-horizontal"></i> SI Unit & Dimension</h4>
                    <p><b>SI Unit:</b> Newton per Coulomb ($\\text{N/C}$) or Volt per meter ($\\text{V/m}$).</p>
                    <p><b>Vector Nature:</b> $\\vec{E}$ ki direction hamesha wahi hoti hai jo ek unit positive test charge par lagne wale force ki hoti hai (yaani positive charge se outward, negative charge se inward).</p>
                </div>

                <h2>Electric Field Due to a Point Charge</h2>
                <p>Chaliye is highly popular derivation ko solve karte hain jo aage dipole aur potential me use hoga:</p>
                <p>According to Coulomb's Law, force between source charge $Q$ and test charge $q_0$ at distance $r$ is:</p>
                <p>$$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q q_0}{r^2}$$</p>
                <p>Electric field intensity $E$ ki definition se:</p>
                <p>$$E = \\frac{F}{q_0} = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q q_0}{r^2 q_0}$$</p>
                <p>Substituting values, we get the final point charge formula:</p>
                <div class="definition-card" style="background: rgba(59, 130, 246, 0.05); border-left-color: var(--primary);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--primary); margin-bottom: 0;">
                        $$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$$
                    </p>
                </div>
                <p><i>Observation:</i> Electric field inversely square key parameter par depend karta hai: $E \\propto \\frac{1}{r^2}$. Agar distance double ho jaye, toh field intensity $\\frac{1}{4}$ times ho jayegi!</p>

                <h2>Superposition Principle (Vector Addition)</h2>
                <p>Agar space me multiple charges present hain, toh kisi point par net field un saare charges ke individual fields ka vector sum hoti hai:</p>
                <p>$$\\vec{E}_{\\text{net}} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + \\dots$$</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-1">
                    <h4><i class="fa-solid fa-circle-question"></i> PYQ Practice Question: Superposition Principle</h4>
                    <p>Two point charges $Q_1 = +2\\mu\\text{C}$ and $Q_2 = -2\\mu\\text{C}$ are kept in vacuum at a separation distance of $2\\text{ m}$. Compute the net electric field intensity (in $\\text{N/C}$) at the midpoint between the two charges. (Take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9 \\text{ N}\\cdot\\text{m}^2/\\text{C}^2$):</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-1" placeholder="Enter electric field in N/C">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(1, '36000')">Check Answer</button>
                    </div>
                    <div id="alert-em-1" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(1)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-1">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Midpoint ki distance nikalo:</b></p>
                            <p>Total separation $d = 2\\text{ m}$ hai, toh midpoint $P$ dono charges se distance $r = 1\\text{ m}$ par hoga.</p>
                            <p><b>Step 2: Individual Electric Fields nikalo:</b></p>
                            <p>Positive charge $Q_1$ ki wajah se field midpoint $P$ par <i>outward</i> (right side) hogi:</p>
                            <p>$$E_1 = 9 \\times 10^9 \\frac{2 \\times 10^{-6}}{1^2} = 18000 \\text{ N/C} \\quad \\text{(pointing towards } Q_2\\text{)}$$</p>
                            <p>Negative charge $Q_2$ ki wajah se field midpoint $P$ par <i>inward</i> (right side, yaani uski taraf) hogi:</p>
                            <p>$$E_2 = 9 \\times 10^9 \\frac{|-2 \\times 10^{-6}|}{1^2} = 18000 \\text{ N/C} \\quad \\text{(pointing towards } Q_2\\text{)}$$</p>
                            <p><b>Step 3: Vector addition karo:</b></p>
                            <p>Chunki dono vectors same direction me (right side towards negative charge) point kar rahe hain, inki magnitudes seedhe add ho jayengi:</p>
                            <p>$$E_{\\text{net}} = E_1 + E_2 = 18000 + 18000 = 36000 \\text{ N/C}$$</p>
                            <p>So the correct calculated value is <b>36000</b>. Easy and very scoring!</p>
                        </div>
                    </div>
                </div>
                
                <div class="info-text" style="margin-top: 30px; text-align: center;">
                    <p><i class="fa-solid fa-arrow-pointer"></i> <b>Tip:</b> Open the <b>Interactive Visualizer Drawer</b> below and select <b>Electric Field Lines</b> to see the radiating vector loops of single charges and dipoles in real time!</p>
                </div>
            </div>
        `
    },
    "em-ch2": {
        title: "Electric Flux & Gauss's Theorem",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj ka topic university exams ka absolute favorite hai: <b>Electric Flux aur Gauss's Theorem</b>. Har saal is theorem ka direct proof ya numerical exam me 5-7 marks me pucha jata hai.</p>
                
                <h2>What is Electric Flux ($\\phi_E$)?</h2>
                <p>Electric flux is a measure of the total number of electric field lines passing normally through a given surface area.</p>
                
                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-brain"></i> Window-Wind Analogy</h4>
                    <p>Socho ki bahar tej hawa (wind) chal rahi hai aur aapne ek window open ki. </p>
                    <p>Agar window hawa ke bilkul perpendicular (normal) hai, toh maximum air room ke andar aayegi. Agar aap window ko tilt (angle par) kar dein, toh hawa kam aayegi. Aur agar window hawa ke parallel ho jaye, toh zero air enter karegi! </p>
                    <p>Exactly isi tarah, <b>Electric Flux ($\\phi_E$)</b> batata hai ki kisi surface se kitna electric field cross kar raha hai:</p>
                </div>

                <div class="definition-card">
                    <h4><i class="fa-solid fa-calculator"></i> Mathematical Formula</h4>
                    <p>For a uniform field $E$ passing through area vector $A$ (which is always normal to the surface):</p>
                    <p>$$\\phi_E = \\vec{E} \\cdot \\vec{A} = EA \\cos\\theta$$</p>
                    <p>Jahan $\\theta$ electric field aur area vector ke beech ka angle hai.</p>
                </div>

                <h3>Key Special Cases:</h3>
                <ul class="bullet-list">
                    <li><b>Maximum Flux ($\\theta = 0^\\circ$):</b> Field normal to surface $\\implies \\cos 0^\\circ = 1 \\implies \\phi_E = EA$.</li>
                    <li><b>Zero Flux ($\\theta = 90^\\circ$):</b> Field parallel to surface $\\implies \\cos 90^\\circ = 0 \\implies \\phi_E = 0$.</li>
                </ul>

                <h2>Gauss's Theorem (Statement & Proof)</h2>
                <div class="theorem-card">
                    <h4><i class="fa-solid fa-certificate"></i> Gauss's Law Statement</h4>
                    <p>The total net electric flux through any closed Gaussian surface enclosing volume is equal to $\\frac{1}{\\epsilon_0}$ times the net charge enclosed within that surface:</p>
                    <p>$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{\\text{enclosed}}}{\\epsilon_0}$$</p>
                </div>

                <div class="hinglish-card" style="background: rgba(20, 184, 166, 0.03); border-color: rgba(20, 184, 166, 0.2);">
                    <h4><i class="fa-solid fa-pen-nib"></i> Complete Proof of Gauss's Law (PYQ Special)</h4>
                    <p>1. Consider a charge $+Q$ placed at the center of a sphere of radius $r$.</p>
                    <p>2. Spherical surface par electric field due to point charge hamesha radially outward aur constant hogi:</p>
                    <p>$$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$$</p>
                    <p>3. Sphere ke ek chote surface element $d\\vec{A}$ ko lein. Chunki $\\vec{E}$ radially outward hai, area vector $d\\vec{A}$ aur $\\vec{E}$ dono parallel honge ($\\theta = 0^\\circ$):</p>
                    <p>$$d\\phi = \\vec{E} \\cdot d\\vec{A} = E \\cdot dA \\cos 0^\\circ = E \\cdot dA$$</p>
                    <p>4. Integrate over the entire closed spherical surface:</p>
                    <p>$$\\phi = \\oint E \\cdot dA = E \\oint dA$$</p>
                    <p>5. Substitute $E$ and the sphere's surface area $\\oint dA = 4\\pi r^2$:</p>
                    <p>$$\\phi = \\left( \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2} \\right) (4\\pi r^2) = \\frac{Q}{\\epsilon_0}$$</p>
                    <p><b>Hence Proved!</b> Yeh 5 marks dilane wala sabse simple and structured proof hai.</p>
                </div>

                <h2>Differential Form (Maxwell's First Equation)</h2>
                <p>Applying the Gauss Divergence Theorem to the integral form, we get the differential form:</p>
                <p>$$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}$$</p>
                <p>Jahan $\\rho$ charge density (volume charge density) hai.</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-2">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 2: Flux Calculation</h4>
                    <p>A flat square frame of side $10\\text{ cm}$ is placed in a uniform electric field $E = 10\\text{ V/m}$. If the angle between the electric field vector and the normal vector to the frame is $60^\\circ$, calculate the electric flux (in $\\text{N}\\cdot\\text{m}^2/\\text{C}$) passing through the frame:</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.01" id="ans-em-2" placeholder="Enter flux (e.g. 0.05)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(2, '0.05')">Check Answer</button>
                    </div>
                    <div id="alert-em-2" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(2)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-2">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Square frame ka area nikalte hain:</b></p>
                            <p>Side $a = 10\\text{ cm} = 0.1\\text{ m}$.</p>
                            <p>$$Area \\ A = a^2 = (0.1)^2 = 0.01\\text{ m}^2$$</p>
                            <p><b>Step 2: Flux formula apply karte hain:</b></p>
                            <p>$$\\phi_E = EA \\cos\\theta$$</p>
                            <p>Given: $E = 10\\text{ V/m}$, $A = 0.01\\text{ m}^2$, $\\theta = 60^\\circ$ ($\\cos 60^\\circ = 0.5$).</p>
                            <p>$$\\phi_E = (10) \\times (0.01) \\times \\cos 60^\\circ = 0.1 \\times 0.5 = 0.05 \\text{ N}\\cdot\\text{m}^2/\\text{C}$$</p>
                            <p>So the correct answer is <b>0.05</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch3": {
        title: "Applications of Gauss's Law",
        html: `
            <div class="chapter-section">
                <p>Hello students! Gauss's Law ki utility iske applications me hai. Kisi highly symmetric charged conductor (jaise line, sheet, ya sphere) ka electric field Coulomb's law se nikalna bohot difficult hota hai, par Gauss's law is kam ko aasan bana deta hai!</p>
                
                <h2>1. Electric Field Due to an Infinite Line Charge</h2>
                <p>Consider an infinitely long straight wire carrying uniform linear charge density $\\lambda = Q/L$.</p>
                <div class="hinglish-card">
                    <p><b>Gaussian Surface Choose Karo:</b> Cylindrical symmetry ki wajah se hum wire ke charo taraf $r$ radius aur $L$ length ka ek <b>coaxial cylindrical Gaussian surface</b> choose karte hain.</p>
                    <p>Cylinder ke teen surfaces hote hain: do circular end caps aur ek curved surface:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>End caps par electric field $\\vec{E}$ and area vector $\\vec{A}$ perpendicular hote hain ($\\theta = 90^\\circ \\implies \\text{Flux} = 0$).</li>
                        <li>Sirf curved surface contribute karta hai jahan $\\theta = 0^\\circ$. Curved area $A = 2\\pi rL$ hai:</li>
                    </ul>
                    <p>$$\\phi = E(2\\pi rL)$$</p>
                </div>
                <p>Gauss's law apply karne par:</p>
                <p>$$\\phi = \\frac{Q_{\\text{enc}}}{\\epsilon_0} \\implies E(2\\pi rL) = \\frac{\\lambda L}{\\epsilon_0}$$</p>
                <p>Cancel $L$, we get the field of infinite line charge:</p>
                <div class="definition-card" style="background: rgba(20, 184, 166, 0.05); border-left-color: var(--teal);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$
                    </p>
                </div>
                <p>Here, $E \\propto \\frac{1}{r}$. Unlike point charge ($1/r^2$), line charge ki field lambai ke inverse ratio me hi drop hoti hai.</p>

                <h2>2. Electric Field Due to an Infinite Plane Sheet</h2>
                <p>Consider an infinite plane thin sheet of charge with uniform surface charge density $\\sigma = Q/A$.</p>
                <p>Using a cylindrical Gaussian pillbox perpendicular to the sheet, the flux contributes only from the two flat end caps ($EA + EA = 2EA$):</p>
                <p>$$2EA = \\frac{Q}{\\epsilon_0} = \\frac{\\sigma A}{\\epsilon_0}$$</p>
                <p>Cancel $A$, we get the most unique result in electrostatics:</p>
                <div class="definition-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--amber); margin-bottom: 0;">
                        $$E = \\frac{\\sigma}{2\\epsilon_0}$$
                    </p>
                </div>
                <p><b>Extremely Important Observation:</b> Sheet ki electric field distance $r$ par depend nahi karti! Yeh uniform field produce karti hai jo capacitor plates me use hoti hai.</p>

                <h2>3. Electric Field of Uniformly Charged Sphere</h2>
                <p>For an insulating solid sphere of radius $R$ and uniform charge $Q$:</p>
                <ul class="bullet-list">
                    <li><b>Outside the sphere ($r \\ge R$):</b> Behaves like a point charge at the center: $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$.</li>
                    <li><b>Inside the sphere ($r < R$):</b> Field drops linearly towards center: $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Qr}{R^3}$.</li>
                </ul>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-3">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 3: Line Charge Field</h4>
                    <p>An infinitely long wire has a linear charge density $\\lambda = 4 \\times 10^{-6}\\text{ C/m}$. Find the magnitude of electric field intensity (in $\\text{N/C}$) at a perpendicular distance $r = 2\\text{ m}$ from the wire (Take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9$):</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-3" placeholder="Enter electric field in N/C">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(3, '36000')">Check Answer</button>
                    </div>
                    <div id="alert-em-3" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(3)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-3">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula use karte hain:</b></p>
                            <p>$$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$$</p>
                            <p>Is formula ko hum likh sakte hain:</p>
                            <p>$$E = 2 \\times \\left( \\frac{1}{4\\pi\\epsilon_0} \\right) \\frac{\\lambda}{r}$$</p>
                            <p><b>Step 2: Values put karte hain:</b></p>
                            <p>$$E = 2 \\times (9 \\times 10^9) \\times \\frac{4 \\times 10^{-6}}{2}$$</p>
                            <p>$$E = 18 \\times 10^9 \\times 2 \\times 10^{-6} = 36 \\times 10^3 = 36000 \\text{ N/C}$$</p>
                            <p>So the correct answer is <b>36000</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch4": {
        title: "Electric Potential & Potential Energy",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge electric field ka scalar approach: <b>Electric Potential</b>. Chunki electric potential ek scalar quantity hai, iski calculations fields ke mukable bohot simple hoti hain!</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Definition: Electric Potential</h4>
                    <p>Electric potential $V$ at any point in an electric field is defined as the work done per unit positive charge in bringing it from infinity to that point against electrostatic forces:</p>
                    <p>$$V = \\frac{W}{q}$$</p>
                    <p><b>SI Unit:</b> Volt ($\\text{V}$), where $1\\text{ V} = 1\\text{ J/C}$.</p>
                </div>

                <h2>Potential Due to a Point Charge</h2>
                <p>For a point charge $Q$, potential at distance $r$ is:</p>
                <p>$$V = -\\int_{\\infty}^r \\vec{E} \\cdot d\\vec{r} = -\\int_{\\infty}^r \\left(\\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}\\right) dr$$</p>
                <p>Integrating, we get the point charge potential formula:</p>
                <div class="definition-card" style="background: rgba(168, 85, 247, 0.05); border-left-color: var(--accent);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--accent); margin-bottom: 0;">
                        $$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r}$$
                    </p>
                </div>
                <p><i>Observation:</i> Potential varies as $V \\propto \\frac{1}{r}$. Note the difference: Electric field drops as $1/r^2$, par potential slow drop hota hai $1/r$ rate par.</p>

                <h2>Relation Between Electric Field and Potential</h2>
                <p>Electric field potential gradient ka negative gradient hoti hai. Yeh highly high-yield conceptual formula hai:</p>
                <p>$$E = -\\frac{dV}{dr}$$</p>
                <p><b>Vector form (Gradient):</b></p>
                <p>$$\\vec{E} = -\\nabla V = -\\left( \\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k} \\right)$$</p>
                <p><i>Physical Meaning:</i> Electric field always points in the direction where electric potential decreases most rapidly.</p>

                <h2>Equipotential Surface</h2>
                <p>A surface on which the electric potential is identical at every point.</p>
                <ul class="bullet-list">
                    <li><b>No work is done:</b> Moving a charge along an equipotential surface requires zero work ($W = q\\Delta V = 0$).</li>
                    <li><b>Perpendicular Field:</b> Electric field lines are always normal (perpendicular) to the equipotential surface.</li>
                </ul>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-4">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 4: Center Potential</h4>
                    <p>Four point charges $q_1 = 2\\text{ nC}$, $q_2 = -2\\text{ nC}$, $q_3 = 3\\text{ nC}$, and $q_4 = -3\\text{ nC}$ are placed at the four corners of a square of side $d = 2\\text{ m}$. Calculate the net electric potential $V$ (in Volts) at the geometric center of the square:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-4" placeholder="Enter potential in Volts">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(4, '0')">Check Answer</button>
                    </div>
                    <div id="alert-em-4" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(4)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-4">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Scalar approach apply karte hain:</b></p>
                            <p>Chunki potential ek scalar quantity hai, hum midpoint par simple algebraic sum karenge:</p>
                            <p>$$V_{\\text{net}} = V_1 + V_2 + V_3 + V_4$$</p>
                            <p><b>Step 2: Center se distance check karte hain:</b></p>
                            <p>Square ke saare corners center se identical distance $r$ par hote hain.</p>
                            <p>$$V_{\\text{net}} = \\frac{1}{4\\pi\\epsilon_0 r} (q_1 + q_2 + q_3 + q_4)$$</p>
                            <p><b>Step 3: Total charge algebraic sum nikalein:</b></p>
                            <p>$$q_{\\text{total}} = 2\\text{ nC} + (-2\\text{ nC}) + 3\\text{ nC} + (-3\\text{ nC}) = 0\\text{ nC}$$</p>
                            <p>Chunki total sum 0 hai, potential center par perfect <b>0 Volts</b> hoga! (Note: Electric field center par non-zero hai, par potential perfectly zero hai!)</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch5": {
        title: "Electric Dipole (Direct 10-Mark Derivation)",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum electrostatics ka sabse high-weightage long derivation solve karenge: <b>Electric Dipole Potential and Field</b>. DU exams ke Set 1 aur Set 3 me yeh question direct 10 marks me pucha gaya hai. Chaliye iski poori geometry ko aasan tarike se samajhte hain.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-arrows-left-right"></i> What is an Electric Dipole?</h4>
                    <p>A pair of equal and opposite point charges $+q$ and $-q$ separated by a very small distance $2a$.</p>
                    <p><b>Dipole Moment:</b> Product of charge and distance vector:</p>
                    <p>$$\\vec{p} = q(2\\vec{a})$$</p>
                    <p>Direction is always from the **negative charge to the positive charge**. Unit: Coulomb-meter ($\\text{C}\\cdot\\text{m}$).</p>
                </div>

                <h2>Electric Potential Due to Dipole (General Point $P(r, \\theta)$)</h2>
                <p>Consider a point $P$ at distance $r$ from the center $O$ of the dipole, making an angle $\\theta$ with the dipole axis.</p>
                <p>Using the distance of $P$ from individual charges $r_+$ and $r_-$:</p>
                <p>$$V = V_+ + V_- = \\frac{q}{4\\pi\\epsilon_0} \\left( \\frac{1}{r_+} - \\frac{1}{r_-} \\right)$$</p>
                <p>For $r \\gg a$, using binomial approximations:</p>
                <p>$$r_+ \\approx r - a\\cos\\theta \\quad \\text{and} \\quad r_- \\approx r + a\\cos\\theta$$</p>
                <p>Substituting and simplifying, we get the master dipole potential formula:</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{p \\cos\\theta}{r^2}$$
                    </p>
                </div>

                <h3>Crucial Cases:</h3>
                <ul class="bullet-list">
                    <li><b>Axial Position ($\\theta = 0^\\circ$):</b> $V_{\\text{axial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^2}$ (Maximum potential).</li>
                    <li><b>Equatorial Position ($\\theta = 90^\\circ$):</b> $V_{\\text{equatorial}} = 0$ (Every equatorial plane point is equidistant from $+q$ and $-q$).</li>
                </ul>

                <h2>Electric Field Due to Dipole (via Gradient)</h2>
                <p>Using the gradient relation $\\vec{E} = -\\nabla V$, we resolve field components:</p>
                <p>Radial Field: $E_r = -\\frac{\\partial V}{\\partial r} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p\\cos\\theta}{r^3}$</p>
                <p>Tangential Field: $E_\\theta = -\\frac{1}{r}\\frac{\\partial V}{\\partial \\theta} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p\\sin\\theta}{r^3}$</p>
                <p>Resultant Field magnitude $E = \\sqrt{E_r^2 + E_\\theta^2}$ gives:</p>
                <div class="definition-card" style="background: rgba(59, 130, 246, 0.05); border-left-color: var(--primary);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--primary); margin-bottom: 0;">
                        $$E = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3} \\sqrt{1 + 3\\cos^2\\theta}$$
                    </p>
                </div>

                <h3>Special Cases of Field:</h3>
                <ul class="bullet-list">
                    <li><b>Axial Field ($\\theta = 0^\\circ$):</b> $E_{\\text{axial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}$ (pointing parallel to $\\vec{p}$).</li>
                    <li><b>Equatorial Field ($\\theta = 90^\\circ$):</b> $E_{\\text{equatorial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$ (pointing opposite to $\\vec{p}$).</li>
                </ul>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-5">
                    <h4><i class="fa-solid fa-circle-question"></i> PYQ Practice Question: Dipole Field</h4>
                    <p>An electric dipole consists of two opposite charges of magnitude $10^{-8}\\text{ C}$ separated by a distance $2a = 2\\text{ cm}$. Calculate the magnitude of the electric field intensity $E$ (in $\\text{N/C}$) at a point on its axis at a distance $r = 10\\text{ cm}$ from the center of the dipole. (Assume $r \\gg a$ and take $\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9$):</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-5" placeholder="Enter axial field in N/C">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(5, '36000')">Check Answer</button>
                    </div>
                    <div id="alert-em-5" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(5)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-5">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Dipole moment $p$ calculate karte hain:</b></p>
                            <p>$$p = q(2a) = 10^{-8}\\text{ C} \\times 0.02\\text{ m} = 2 \\times 10^{-10}\\text{ C}\\cdot\\text{m}$$</p>
                            <p><b>Step 2: Axial field formula apply karte hain:</b></p>
                            <p>$$E_{\\text{axial}} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}$$</p>
                            <p>Given: $r = 10\\text{ cm} = 0.1\\text{ m} \\implies r^3 = 10^{-3}\\text{ m}^3$.</p>
                            <p>$$E_{\\text{axial}} = 9 \\times 10^9 \\times \\frac{2 \\times (2 \\times 10^{-10})}{10^{-3}}$$</p>
                            <p>$$E_{\\text{axial}} = 9 \\times 10^9 \\times \\frac{4 \\times 10^{-10}}{10^{-3}} = \\frac{36 \\times 10^{-1}}{10^{-3}} = 3.6 \\times 10^3 = 36000 \\text{ N/C}$$</p>
                            <p>So the correct answer is <b>36000</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch6": {
        title: "Dielectrics & Polarization",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum padhenge **Dielectrics** ke baare me jo capacitor ki efficiency ko multiply karte hain. Is chapter ke questions DU exams ke Set 2 aur Set 3 me 3-5 marks me lagatar aate hain.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> What is a Dielectric?</h4>
                    <p>A dielectric is an insulating material that does not allow free flow of electric current but becomes <b>polarized</b> under the influence of an external electric field.</p>
                    <p><b>Examples:</b> Glass, Mica, Plastic, Pure Water, and Dry Air.</p>
                </div>

                <h2>Polarization Vector ($\\vec{P}$)</h2>
                <p>When a dielectric is placed in an external electric field, its atomic dipoles align. **Polarization ($\\vec{P}$)** is defined as the net induced dipole moment per unit volume of the dielectric material:</p>
                <p>$$P = \\frac{p_{\\text{net}}}{\\text{Volume}}$$</p>
                <p><b>SI Unit:</b> Coulomb per square meter ($\\text{C/m}^2$).</p>

                <h2>Relation: Polarization and Bound Charge Density ($\\sigma_p$)</h2>
                <p>Dielectric surface par induce hone wale bounds charges ki surface density $\\sigma_p$ polarization vector ke normal component ke equal hoti hai:</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$\\sigma_p = \\vec{P} \\cdot \\hat{n} = P$$
                    </p>
                </div>

                <h2>Electric Displacement Vector ($\\vec{D}$)</h2>
                <p>Electric displacement vector $\\vec{D}$ free charge and bound charge dono ke relative effects ko combine karta hai:</p>
                <p>$$\\vec{D} = \\epsilon_0 \\vec{E} + \\vec{P} = \\epsilon \\vec{E}$$</p>
                <p><b>Gauss's Law in Dielectrics:</b></p>
                <p>$$\\oint \\vec{D} \\cdot d\\vec{A} = Q_{\\text{free}}$$</p>
                <p>Integral form me free charges hi $\\vec{D}$ ke sources hote hain. Bound charges ka effect $\\vec{P}$ me absorb ho jata hai.</p>

                <h2>Capacitor with Dielectric (Exam Gold)</h2>
                <p>Dielectric insert karne par capacitance hamesha increase hoti hai: $C' = K C_0$. Par baaki quantities depends karti hain battery connection par:</p>
                <ul class="bullet-list">
                    <li><b>Case 1: Battery Connected (Voltage V is constant):</b> $V' = V_0$, $C' = KC_0$, $Q' = KQ_0$, $E' = E_0$, and stored energy $U' = K U_0$ (increases).</li>
                    <li><b>Case 2: Battery Disconnected / Isolated (Charge Q is constant):</b> $Q' = Q_0$, $C' = KC_0$, $V' = \\frac{V_0}{K}$ (decreases), $E' = \\frac{E_0}{K}$ (decreases), and stored energy $U' = \\frac{U_0}{K}$ (decreases).</li>
                </ul>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-6">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 6: Isolated Capacitor</h4>
                    <p>A parallel plate capacitor is charged in air to a potential difference $V_0 = 12\\text{ V}$ using a battery. The battery is then completely disconnected (isolated). A slab of dielectric material with dielectric constant $K = 3$ is then inserted between the plates. What is the new potential difference $V'$ (in Volts) across the capacitor plates?</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-6" placeholder="Enter new voltage in Volts">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(6, '4')">Check Answer</button>
                    </div>
                    <div id="alert-em-6" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(6)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-6">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Check constant parameters:</b></p>
                            <p>Chunki battery ko disconnect (isolated) kar diya gaya hai, capacitor plates par net charge $Q$ hamesha constant rahega ($Q' = Q_0$).</p>
                            <p><b>Step 2: Capacitance aur Voltage calculation:</b></p>
                            <p>Dielectric insert karne par capacitance increases: $C' = KC_0 = 3 C_0$.</p>
                            <p>Chunki $Q$ constant hai, voltage ka formula $V = Q/C$ se:</p>
                            <p>$$V' = \\frac{Q'}{C'} = \\frac{Q_0}{3 C_0} = \\frac{V_0}{3} = \\frac{12}{3} = 4 \\text{ Volts}$$</p>
                            <p>Voltage drops to $\\frac{1}{3}$ of its original value. So the correct answer is <b>4</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch7": {
        title: "Magnetic Field & Lorentz Force",
        html: `
            <div class="chapter-section">
                <p>Hello students! Welcome to Unit II (Magnetostatics). Ab hum static charges se aage badhkar dynamic charges (moving charges) ki duniya me chalenge: <b>Magnetic Field and Lorentz Force</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-compass"></i> What is Magnetic Field ($\\vec{B}$)?</h4>
                    <p>The vector space around a moving charge or magnet where magnetic forces can be experienced.</p>
                    <p><b>SI Unit:</b> Tesla ($\\text{T}$), where $1\\text{ T} = 10^4\\text{ Gauss}$.</p>
                </div>

                <h2>Lorentz Force (Master Formula)</h2>
                <p>Total force experienced by a charged particle moving through both electric and magnetic fields:</p>
                <p>$$\\vec{F} = q( \\vec{E} + \\vec{v} \\times \\vec{B} )$$</p>
                <p>Agar sirf magnetic field present ho, toh magnetic force is:</p>
                <p>$$F = qvB\\sin\\theta$$</p>
                <p>Jahan $\\theta$ particle ki velocity $\\vec{v}$ aur field $\\vec{B}$ ke beech ka angle hai.</p>
                
                <h3>Key Cases:</h3>
                <ul class="bullet-list">
                    <li><b>Parallel Motion ($\\theta = 0^\\circ$ or $180^\\circ$):</b> $F = 0$. Particle bina direction change kiye straight path me chala jayega.</li>
                    <li><b>Perpendicular Motion ($\\theta = 90^\\circ$):</b> $F = qvB$ (Maximum force). Kinetic energy constant rahegi aur particle **circular path** me spin karne lagega!</li>
                </ul>

                <h2>Radius of Circular Path inside B Field</h2>
                <p>Centripetal force is provided by the magnetic Lorentz force:</p>
                <p>$$\\frac{m v^2}{r} = qvB \\implies r = \\frac{mv}{qB}$$</p>
                <p><b>Time Period ($T$):</b></p>
                <p>$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi m}{qB}$$</p>
                <p><i>Amazing Fact:</i> Orbit rotation time period speed aur radius par bilkul depend nahi karta! Yeh cyclotron ka base concept hai.</p>

                <h2>Force on Current-Carrying Conductor</h2>
                <p>A conductor carries moving charges. Therefore, B-field exerts a net force on it:</p>
                <p>$$\\vec{F} = I( \\vec{L} \\times \\vec{B} ) \\implies F = BIL\\sin\\theta$$</p>
                <p>Jahan $I$ current, $L$ conductor length, aur $\\theta$ length and B-field vector ke beech ka angle hai.</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-7">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 7: Force on Wire</h4>
                    <p>A straight wire of length $L = 2\\text{ m}$ carrying current $I = 5\\text{ A}$ is placed in a uniform magnetic field $B = 0.5\\text{ T}$. If the wire is aligned perfectly perpendicular to the magnetic field, calculate the magnetic force (in Newtons) experienced by the wire:</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.1" id="ans-em-7" placeholder="Enter force in Newtons">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(7, '5')">Check Answer</button>
                    </div>
                    <div id="alert-em-7" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(7)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-7">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula select karte hain:</b></p>
                            <p>$$F = BIL \\sin\\theta$$</p>
                            <p><b>Step 2: Values put karte hain:</b></p>
                            <p>Wire magnetic field ke perpendicular aligned hai, so $\\theta = 90^\\circ$ ($\\sin 90^\\circ = 1$).</p>
                            <p>$$F = (0.5\\text{ T}) \\times (5\\text{ A}) \\times (2\\text{ m}) \\times \\sin 90^\\circ$$</p>
                            <p>$$F = 2.5 \\times 2 \\times 1 = 5\\text{ Newtons}$$</p>
                            <p>So the correct answer is <b>5</b> Newtons!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch8": {
        title: "Biot-Savart Law",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum padhenge magnetostatics ka sabse core mathematical tool: <b>Biot-Savart Law</b>. Jaise electrostatics me Coulomb's law individual charges ki field batata hai, waise hi magnetostatics me Biot-Savart law current elements ki field calculate karta hai.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-wave-square"></i> Biot-Savart Law Statement</h4>
                    <p>The magnetic field contribution $d\\vec{B}$ produced by a small current element $I d\\vec{l}$ at a distance $r$ is:</p>
                    <p>$$dB = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin\\theta}{r^2}$$</p>
                    <p>Jahan $\\mu_0 = 4\\pi \\times 10^{-7}\\text{ T}\\cdot\\text{m/A}$ permeability of free space hai, aur $\\theta$ vector $d\\vec{l}$ and position vector $\\vec{r}$ ke beech ka angle hai.</p>
                </div>

                <h2>Biot-Savart Law (Vector Form)</h2>
                <p>Vector form conceptual MCQs and DU exams me bar-bar aati hai:</p>
                <p>$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I( d\\vec{l} \\times \\vec{r} )}{r^3} = \\frac{\\mu_0}{4\\pi} \\frac{I( d\\vec{l} \\times \\hat{r} )}{r^2}$$</p>
                <p><b>Direction of B:</b> Cross product ke rules se, $d\\vec{B}$ hamesha $d\\vec{l}$ aur $\\vec{r}$ dono ke perpendicular plane me point karta hai. (Right-Hand Thumb Rule).</p>

                <h2>Application: B due to Infinite Straight Wire</h2>
                <p>Biot-Savart law ko integrate karke perpendicular distance $r$ par magnetic field calculate karte hain:</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$B = \\frac{\\mu_0 I}{2\\pi r}$$
                    </p>
                </div>
                <p><i>Key Trend:</i> wire ki magnetic field loop density distance ke simple inverse ratio $B \\propto \\frac{1}{r}$ par drop hoti hai.</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-8">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 8: Perpendicular distance field</h4>
                    <p>A long straight wire carries a steady current $I = 10\\text{ A}$ in vacuum. Calculate the magnitude of the magnetic field intensity $B$ (in Tesla) at a perpendicular distance of $0.1\\text{ m}$ from the wire. (Express in terms of scientific exponent e.g. 2e-5 for $2 \\times 10^{-5}$):</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-em-8" placeholder="Enter B e.g. 2e-5">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(8, '2e-5')">Check Answer</button>
                    </div>
                    <div id="alert-em-8" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(8)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-8">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula use karte hain:</b></p>
                            <p>$$B = \\frac{\\mu_0 I}{2\\pi r}$$</p>
                            <p>We know that $\\frac{\\mu_0}{4\\pi} = 10^{-7} \\implies \\frac{\\mu_0}{2\\pi} = 2 \\times 10^{-7}$.</p>
                            <p><b>Step 2: Values substitute karein:</b></p>
                            <p>$$B = 2 \\times 10^{-7} \\times \\frac{10\\text{ A}}{0.1\\text{ m}}$$</p>
                            <p>$$B = 2 \\times 10^{-7} \\times 100 = 2 \\times 10^{-5} \\text{ Tesla}$$</p>
                            <p>Standard scientific notation representing format is <b>2e-5</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch9": {
        title: "Axial Field of Circular Coil (10-Mark)",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj ka derivation university exams ka absolute crown jewel hai: <b>Magnetic Field on the Axis of a Circular Coil</b>. Set 1 ke long question 3(a) me yeh direct 10 marks me aya tha. Chaliye iska structured component diagram aur integration steps seekhte hain.</p>
                
                <h2>Problem Formulation</h2>
                <p>We want to find the magnetic field at axial point $P$ at distance $x$ from the center of a circular coil of radius $R$ carrying current $I$.</p>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-pen-nib"></i> Step-by-Step Derivation (DU Special)</h4>
                    <p><b>Step 1: Element choose karo:</b> Coil ke top par ek element $dl$ choose karte hain. Is element ki point $P$ se distance $r$ hai:</p>
                    <p>$$r = \\sqrt{R^2 + x^2}$$</p>
                    <p><b>Step 2: Biot-Savart apply karo:</b> Element $dl$ hamesha distance vector $r$ ke perpendicular ($\\theta=90^\\circ$) hoga:</p>
                    <p>$$dB = \\frac{\\mu_0}{4\\pi} \\frac{I dl \\sin 90^\\circ}{r^2} = \\frac{\\mu_0}{4\\pi} \\frac{I dl}{R^2 + x^2}$$</p>
                    <p><b>Step 3: Component analysis (Symmetry Argument):</b> Opposite elements ki magnetic fields ke perpendicular components ($dB \\sin\\phi$) cancel ho jate hain. Sirf axial components ($dB \\cos\\phi$) add hote hain:</p>
                    <p>$$B = \\oint dB \\cos\\phi$$</p>
                    <p>From geometry diagram: $\\cos\\phi = \\frac{R}{r} = \\frac{R}{\\sqrt{R^2 + x^2}}$.</p>
                    <p><b>Step 4: Integrate over circular coil:</b></p>
                    <p>$$B = \\oint \\left( \\frac{\\mu_0}{4\\pi} \\frac{I dl}{R^2 + x^2} \\right) \\frac{R}{\\sqrt{R^2 + x^2}}$$</p>
                    <p>Taking constants outside the integral:</p>
                    <p>$$B = \\frac{\\mu_0 I R}{4\\pi (R^2 + x^2)^{3/2}} \\oint dl$$</p>
                    <p>Since $\\oint dl = 2\\pi R$ (total coil circumference):</p>
                    <p>$$B = \\frac{\\mu_0 I R}{4\\pi (R^2 + x^2)^{3/2}} (2\\pi R) = \\frac{\\mu_0 I R^2}{2(R^2 + x^2)^{3/2}}$$</p>
                </div>

                <div class="definition-card" style="background: rgba(59, 130, 246, 0.05); border-left-color: var(--primary);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--primary); margin-bottom: 0;">
                        $$B = \\frac{\\mu_0 N I R^2}{2(R^2 + x^2)^{3/2}}$$
                    </p>
                </div>
                <p>Agar coil me $N$ turns hain, toh field $N$ times multiply ho jati hai.</p>

                <h3>At the Centre of the Coil ($x = 0$):</h3>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$B_{\\text{centre}} = \\frac{\\mu_0 N I}{2R}$$
                    </p>
                </div>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-9">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 9: Central Loop Field</h4>
                    <p>A circular coil of radius $R = 10\\text{ cm}$ contains $N = 100$ turns of wire. If a steady current $I = 2\\text{ A}$ flows through the coil, calculate the magnetic field intensity $B$ (in Tesla) at the center of the coil. (Take $\\mu_0 = 4\\pi \\times 10^{-7}$ and express as a decimal rounded to 4 decimal places):</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.0001" id="ans-em-9" placeholder="Enter B e.g. 0.0013">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(9, '0.0013')">Check Answer</button>
                    </div>
                    <div id="alert-em-9" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(9)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-9">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula nikalte hain:</b></p>
                            <p>$$B = \\frac{\\mu_0 N I}{2R}$$</p>
                            <p><b>Step 2: Values put karte hain:</b></p>
                            <p>Radius $R = 10\\text{ cm} = 0.1\\text{ m}$.</p>
                            <p>$$B = \\frac{(4\\pi \\times 10^{-7}) \\times 100 \\times 2}{2 \\times 0.1}$$</p>
                            <p>$$B = \\frac{4\\pi \\times 10^{-5} \\times 2}{0.2} = \\frac{8\\pi \\times 10^{-5}}{0.2} = 40\\pi \\times 10^{-5} = 4\\pi \\times 10^{-4}$$</p>
                            <p>Substituting $\\pi \\approx 3.1416$:</p>
                            <p>$$B \\approx 4 \\times 3.1416 \\times 10^{-4} = 12.566 \\times 10^{-4} \\approx 0.001257 \\text{ Tesla}$$</p>
                            <p>Rounding to 4 decimal places gives <b>0.0013</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch10": {
        title: "Ampere's Law & Solenoid",
        html: `
            <div class="chapter-section">
                <p>Hello students! Jaise electrostatics me Gauss's Law symmetric surfaces ka field चुटकियों me nikalta hai, waise hi magnetostatics me symmetric paths ka field nikalne ka shortcut hai: <b>Ampere's Circuital Law</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-align-justify"></i> Ampere's Circuital Law</h4>
                    <p>The line integral of magnetic field $\\vec{B}$ around any closed Amperian loop is equal to $\\mu_0$ times the total net current enclosed by that loop:</p>
                    <p>$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}}$$</p>
                </div>

                <h2>Application 1: Magnetic Field Inside a Long Solenoid</h2>
                <p>A solenoid consists of a long wire wound into a tight helical coil of length $L$ with total turns $N$.</p>
                <div class="hinglish-card">
                    <p><b>Amperian Loop analysis:</b></p>
                    <p>Solenoid ke inside field horizontal aur uniform hoti hai, par outside field almost negligible (zero) hoti hai.</p>
                    <p>Hum ek rectangular loop $PQRS$ choose karte hain. Sirf inside parallel section $PQ$ contribute karta hai ($B \\cdot L$). Outside sections are perpendicular or in zero-field regions:</p>
                    <p>$$\\oint \\vec{B} \\cdot d\\vec{l} = BL$$</p>
                    <p>Current enclosed is number of enclosed turns ($nL$) times current $I$:</p>
                    <p>$$I_{\\text{enc}} = (nL)I$$</p>
                    <p>Ampere's law se: $BL = \\mu_0 (nL)I$. Cancel $L$ to get the classic formula:</p>
                </div>
                <div class="definition-card" style="background: rgba(168, 85, 247, 0.05); border-left-color: var(--accent);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--accent); margin-bottom: 0;">
                        $$B = \\mu_0 n I$$
                    </p>
                </div>
                <p>Jahan $n = N/L$ is the number of turns per unit length.</p>

                <h2>Application 2: Magnetic Field Inside Toroid</h2>
                <p>A toroid is a solenoid bent into a closed circular shape of mean radius $r$. Integrating along a circular Amperian loop of radius $r$ inside the core gives:</p>
                <p>$$B(2\\pi r) = \\mu_0 N I \\implies B = \\frac{\\mu_0 N I}{2\\pi r}$$</p>
                <p>Which is also $B = \\mu_0 n I$ inside the core, and perfectly **zero** in the empty space outside!</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-10">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 10: Solenoid Field</h4>
                    <p>A long solenoid has $10\\text{ turns/cm}$ and carries a current of $2\\text{ A}$. Calculate the magnetic field intensity $B$ (in Tesla) inside the core of the solenoid. (Take $\\mu_0 = 4\\pi \\times 10^{-7}$ and round your answer to 5 decimal places):</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.00001" id="ans-em-10" placeholder="Enter B e.g. 0.00251">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(10, '0.00251')">Check Answer</button>
                    </div>
                    <div id="alert-em-10" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(10)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-10">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Check Turn Density units:</b></p>
                            <p>Given: $10\\text{ turns/cm}$. Humein ise SI unit (turns per meter) me convert karna hoga:</p>
                            <p>$$n = 10\\text{ turns/cm} = 1000\\text{ turns/m}$$</p>
                            <p><b>Step 2: Formula apply karte hain:</b></p>
                            <p>$$B = \\mu_0 n I$$</p>
                            <p>$$B = (4\\pi \\times 10^{-7}) \\times 1000 \\times 2$$</p>
                            <p>$$B = 8\\pi \\times 10^{-4} = 8 \\times 3.14159 \\times 10^{-4} = 25.1327 \\times 10^{-4} \\approx 0.002513 \\text{ Tesla}$$</p>
                            <p>Rounding to 5 decimal places gives <b>0.00251</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch11": {
        title: "Magnetic Materials (Susceptibility & Permeability)",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj ka topic short conceptual questions ke liye highly popular hai: **Classification of Magnetic Materials**. Chaliye theoretical aur mathematical definitions ko aasan Hinglish me samajhte hain.</p>
                
                <h2>Key Quantities Definitions</h2>
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Magnetization Vector ($\\vec{M}$)</h4>
                    <p>Induced magnetic dipole moment per unit volume of a material when placed in an external field:</p>
                    <p>$$\\vec{M} = \\frac{\\vec{m}_{\\text{net}}}{\\text{Volume}}$$</p>
                    <p><b>Unit:</b> Ampere per meter ($\\text{A/m}$).</p>
                </div>

                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Magnetic Intensity ($\\vec{H}$)</h4>
                    <p>The external magnetizing field applied, independent of the medium's magnetic characteristics:</p>
                    <p>$$\\vec{H} = \\frac{\\vec{B}_0}{\\mu_0}$$</p>
                    <p><b>Unit:</b> Ampere per meter ($\\text{A/m}$).</p>
                </div>

                <p><b>Total Field inside a material:</b></p>
                <p>$$\\vec{B} = \\mu_0( \\vec{H} + \\vec{M} )$$</p>

                <h2>Magnetic Susceptibility ($\\chi_m$) & Permeability ($\\mu_r$)</h2>
                <p><b>Susceptibility:</b> Measures ease of magnetization: $\\vec{M} = \\chi_m \\vec{H}$.</p>
                <p>Substituting this in total field equation, we derive the relative permeability relation:</p>
                <p>$$B = \\mu_0( H + \\chi_m H ) = \\mu_0 H (1 + \\chi_m)$$</p>
                <p>Since $B = \\mu H$, we get the most important relation (Set 2 PYQ):</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$\\mu_r = 1 + \\chi_m$$
                    </p>
                </div>

                <h2>Classification of Magnetic Materials</h2>
                <ol class="bullet-list">
                    <li><b>Diamagnetic:</b> Magnetize weakly opposite to external field. $\\chi_m$ is negative and small ($\\chi_m < 0$). Examples: Cu, Water, Bi.</li>
                    <li><b>Paramagnetic:</b> Magnetize weakly in the field direction. $\\chi_m$ is positive and small ($\\chi_m > 0$). Examples: Al, Pt, Oxygen.</li>
                    <li><b>Ferromagnetic:</b> Magnetize strongly in the field direction. $\\chi_m$ is extremely large and positive ($\\chi_m \\gg 1$). Examples: Fe, Ni, Co.</li>
                </ol>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-11">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 11: Susceptibility Relation</h4>
                    <p>The magnetic susceptibility of a paramagnetic material is $\\chi_m = 0.0002$. What is the relative magnetic permeability $\\mu_r$ of the material?</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.0001" id="ans-em-11" placeholder="Enter relative permeability">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(11, '1.0002')">Check Answer</button>
                    </div>
                    <div id="alert-em-11" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(11)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-11">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula select karein:</b></p>
                            <p>$$\\mu_r = 1 + \\chi_m$$</p>
                            <p><b>Step 2: Simple addition:</b></p>
                            <p>Given $\\chi_m = 0.0002$:</p>
                            <p>$$\\mu_r = 1 + 0.0002 = 1.0002$$</p>
                            <p>So the relative permeability is <b>1.0002</b>! Paramagnetic materials are weakly magnetic, hence $\\mu_r$ is slightly greater than 1.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch12": {
        title: "Electromagnetic Induction (EMI)",
        html: `
            <div class="chapter-section">
                <p>Hello students! Welcome to Unit III (EMI and Networks). Ab hum electrostatics aur magnetostatics ko link karke aage badhenge: **Electromagnetic Induction**.</p>
                
                <h2>Faraday's Laws of EMI</h2>
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Faraday's Second Law</h4>
                    <p>The magnitude of the induced emf in a closed circuit is directly proportional to the rate of change of magnetic flux linked with that circuit:</p>
                    <p>$$e = -N \\frac{d\\phi_B}{dt}$$</p>
                    <p>Jahan $\\phi_B = \\vec{B}\\cdot\\vec{A} = BA\\cos\\theta$ magnetic flux (Weber) hai, aur negative sign direction (Lenz's Law) ko represent karta hai.</p>
                </div>

                <h2>Lenz's Law & Conservation of Energy (PYQ Alert)</h2>
                <p>Lenz's Law states that the induced current direction always opposes the magnetic flux change that created it. </p>
                <div class="hinglish-card">
                    <p><b>Energy Conservation proof:</b></p>
                    <p>Agar hum ek magnet ke North pole ko coil ki taraf push karein, toh coil North pole generate karke repulsion create karti hai. Humne jo mechanical work magnet ko push karne me kiya, wahi mechanical energy coil ke induced electrical current (electrical energy) me convert hoti hai! </p>
                    <p>Agar opposite hota (attraction), toh magnet bina kisi external work ke unlimited accelerate karta, jo Law of Conservation of Energy ko violate kar deta. Isliye Lenz's law is a solid consequence of Energy Conservation!</p>
                </div>

                <h2>Self-Inductance of a Solenoid (Set 2 PYQ)</h2>
                <p>Self-induction refers to opposing emf created inside a single coil due to its own changing current. Total flux linkage is $N\\phi = LI$, where $L$ is the self-inductance (Henry).</p>
                <p>For a long solenoid of length $l$, area $A$, and turns $N$:</p>
                <p>1. B-field: $B = \\mu_0 \\frac{N}{l} I$</p>
                <p>2. Flux of single turn: $\\phi = BA = \\mu_0 \\frac{N}{l} I A$</p>
                <p>3. Total flux linkage: $N\\phi = \\frac{\\mu_0 N^2 A}{l} I$</p>
                <p>Since $N\\phi = LI$, we get the self-inductance derivation:</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$L = \\frac{\\mu_0 N^2 A}{l}$$
                    </p>
                </div>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-12">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 12: Induced emf</h4>
                    <p>The magnetic flux linked with a coil changes uniformly from $\\phi_1 = 5\\text{ Wb}$ to $\\phi_2 = 2\\text{ Wb}$ in a time interval of $0.3\\text{ seconds}$. Calculate the magnitude of the induced electromotive force $e$ (in Volts) in the coil:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-em-12" placeholder="Enter induced emf in Volts">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(12, '10')">Check Answer</button>
                    </div>
                    <div id="alert-em-12" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(12)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-12">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Rate of change of flux calculate karein:</b></p>
                            <p>$$\\Delta \\phi = \\phi_2 - \\phi_1 = 2\\text{ Wb} - 5\\text{ Wb} = -3\\text{ Wb}$$</p>
                            <p>Time interval $\\Delta t = 0.3\\text{ seconds}$.</p>
                            <p><b>Step 2: Magnitude of induced emf:</b></p>
                            <p>$$|e| = \\left| -\\frac{\\Delta \\phi}{\\Delta t} \\right| = \\left| -\\frac{-3}{0.3} \\right| = \\frac{3}{0.3} = 10 \\text{ Volts}$$</p>
                            <p>So the induced voltage magnitude is <b>10</b> Volts!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch13": {
        title: "Maxwell's Equations & Displacement Current",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum electromagnetism ke ultimate master equations seekhenge: **Maxwell's Four Equations**. Har saal inka 10 marks ka direct theory and significance question exam me aata hai.</p>
                
                <h2>Continuity Equation (Conservation of Charge)</h2>
                <p>Continuity equation batata hai ki kisi close volume se nikalne wala current charge flow rate ke loss ke equal hota hai:</p>
                <div class="theorem-card">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--teal); margin-bottom: 0;">
                        $$\\nabla \\cdot \\vec{J} + \\frac{\\partial\\rho}{\\partial t} = 0$$
                    </p>
                </div>

                <h2>Displacement Current (Maxwell's Contribution)</h2>
                <div class="hinglish-card">
                    <p><b>Why did Maxwell modify Ampere's Law?</b></p>
                    <p>Jab ek capacitor charge ho raha hota hai, toh conduction current wire me toh flow karta hai, par plates ke beech me space khali hota hai. Agar hum Ampere's Law lagayein, toh wire ke loop me $\\oint \\vec{B}\\cdot d\\vec{l} = \\mu_0 I$ milta hai, par capacitor ke beech me $\\oint \\vec{B}\\cdot d\\vec{l} = 0$ milta hai (chunki wahan koi path wire nahi hai). </p>
                    <p>Yeh ek bada scientific contradiction tha! Maxwell ne is contradiction ko hataya aur bola ki time-varying electric field plates ke beech me ek magnetic field produce karta hai. Is invisible current factor ko unhone <b>Displacement Current ($I_d$)</b> ka naam diya:</p>
                    <p>$$I_d = \\epsilon_0 \\frac{d\\phi_E}{dt}$$</p>
                </div>

                <h2>Maxwell's Four Master Equations Table</h2>
                <table class="katex-display" style="width: 100%; border-collapse: collapse; font-size: 13px; text-align: left;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--border-color); color: var(--primary);">
                            <th style="padding: 10px;">Name of Equation</th>
                            <th style="padding: 10px;">Differential Form</th>
                            <th style="padding: 10px;">Integral Form</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <td style="padding: 10px; font-weight: 600;">1. Gauss's Law (Elec)</td>
                            <td style="padding: 10px;">$\\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0}$</td>
                            <td style="padding: 10px;">$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q}{\\epsilon_0}$</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <td style="padding: 10px; font-weight: 600;">2. Gauss's Law (Mag)</td>
                            <td style="padding: 10px;">$\\nabla \\cdot \\vec{B} = 0$</td>
                            <td style="padding: 10px;">$\\oint \\vec{B} \\cdot d\\vec{A} = 0$</td>
                        </tr>
                        <tr style="border-bottom: 1px solid var(--border-color);">
                            <td style="padding: 10px; font-weight: 600;">3. Faraday's Law</td>
                            <td style="padding: 10px;">$\\nabla \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}$</td>
                            <td style="padding: 10px;">$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\phi_B}{dt}$</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: 600;">4. Ampere-Maxwell Law</td>
                            <td style="padding: 10px;">$\\nabla \\times \\vec{B} = \\mu_0\\vec{J} + \\mu_0\\epsilon_0\\frac{\\partial\\vec{E}}{\\partial t}$</td>
                            <td style="padding: 10px;">$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I + \\mu_0\\epsilon_0\\frac{d\\phi_E}{dt}$</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-13">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 13: Displacement Current</h4>
                    <p>A parallel plate capacitor is being charged. The rate of change of electric flux between the plates is $\\frac{d\\phi_E}{dt} = 10^{11} \\text{ V}\\cdot\\text{m/s}$. Calculate the displacement current $I_d$ (in Amperes) between the plates. (Take $\\epsilon_0 = 8.85 \\times 10^{-12} \\text{ C}^2/\\text{N}\\cdot\\text{m}^2$):</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.001" id="ans-em-13" placeholder="Enter Id in Amperes">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(13, '0.885')">Check Answer</button>
                    </div>
                    <div id="alert-em-13" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(13)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-13">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formula select karte hain:</b></p>
                            <p>$$I_d = \\epsilon_0 \\frac{d\\phi_E}{dt}$$</p>
                            <p><b>Step 2: Simple multiplication:</b></p>
                            <p>$$I_d = (8.85 \\times 10^{-12}) \\times 10^{11} = 8.85 \\times 10^{-1} = 0.885 \\text{ Amperes}$$</p>
                            <p>So displacement current value between the plates is <b>0.885</b> Amperes!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "em-ch14": {
        title: "Network Theorems",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum is course ka last par highly scoring numerical chapter padhenge: **Network Theorems**. KCL, KVL, Thevenin, aur Maximum Power Transfer ke proofs aur questions har saal lagatar aate hain.</p>
                
                <h2>1. Kirchhoff's Laws (Conservation Bases)</h2>
                <ul class="bullet-list">
                    <li><b>KCL (Current Law):</b> Node junction par net current sum zero hota hai ($\\sum I = 0$). Conservation base: **Law of Conservation of Charge**.</li>
                    <li><b>KVL (Voltage Law):</b> Loop voltages and emfs sum zero hota hai ($\\sum V = 0$). Conservation base: **Law of Conservation of Energy**.</li>
                </ul>

                <h2>2. Thevenin's Theorem (Series Equivalent)</h2>
                <p>Any active linear two-terminal circuit containing voltage sources and resistors can be replaced by a single series voltage $V_{\\text{th}}$ and resistance $R_{\\text{th}}$:</p>
                <p>$$I_{\\text{load}} = \\frac{V_{\\text{th}}}{R_{\\text{th}} + R_{\\text{load}}}$$</p>

                <h2>3. Maximum Power Transfer Theorem (Set 2 Proof)</h2>
                <p>Power delivered to a load resistor $R_L$ is maximum when the load resistance equals the internal series resistance of the source ($R_L = R_{\\text{th}}$).</p>
                <div class="hinglish-card">
                    <p><b>Derivation Proof summary:</b></p>
                    <p>Power is: $P_L = I^2 R_L = \\frac{V_{\\text{th}}^2 R_L}{(R_{\\text{th}} + R_L)^2}$</p>
                    <p>Power maximize karne ke liye differentiate karein: $\\frac{dP_L}{dR_L} = 0$. Quotient rule se solve karne par we get:</p>
                    <p>$$(R_{\\text{th}} + R_L)^2 - 2R_L(R_{\\text{th}} + R_L) = 0 \\implies R_L = R_{\\text{th}}$$</p>
                </div>
                <p>Substituting $R_L = R_{\\text{th}}$ in the power equation yields maximum power output:</p>
                <div class="definition-card" style="background: rgba(245, 158, 11, 0.05); border-left-color: var(--amber);">
                    <p style="text-align: center; font-size: 18px; font-weight: bold; color: var(--amber); margin-bottom: 0;">
                        $$P_{\\text{max}} = \\frac{V_{\\text{th}}^2}{4 R_{\\text{th}}}$$
                    </p>
                </div>
                <p><b>Efficiency Limit:</b> Maximum power transfer condition par efficiency identical $50\\%$ hoti hai, yaani half power source ke andoni resistance me heat bankar waste ho jata hai!</p>

                <!-- Practice Question -->
                <div class="question-card" id="quiz-em-14">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 14: Max Power Transfer</h4>
                    <p>An active source circuit has an open-circuit Thevenin voltage $V_{\\text{th}} = 10\\text{ V}$ and equivalent series resistance $R_{\\text{th}} = 2\\text{ }\\Omega$. What is the maximum electrical power (in Watts) that can be transferred from this source to an adjustable load resistor $R_L$?</p>
                    
                    <div class="question-input-area">
                        <input type="number" step="0.1" id="ans-em-14" placeholder="Enter maximum power in Watts">
                        <button class="btn btn-primary btn-sm" onclick="checkQuizEM(14, '12.5')">Check Answer</button>
                    </div>
                    <div id="alert-em-14" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolutionEM(14)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-em-14">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Check Maximum Power condition:</b></p>
                            <p>Maximum power transfer tabhi hota hai jab load resistor equals internal resistance: $R_L = R_{\\text{th}} = 2\\text{ }\\Omega$.</p>
                            <p><b>Step 2: Formula apply karein:</b></p>
                            <p>$$P_{\\text{max}} = \\frac{V_{\\text{th}}^2}{4 R_{\\text{th}}}$$</p>
                            <p>$$P_{\\text{max}} = \\frac{10^2}{4 \\times 2} = \\frac{100}{8} = 12.5 \\text{ Watts}$$</p>
                            <p>So the maximum power transferred is <b>12.5</b> Watts! Very clean and scoring!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// --- 3. Dynamic Solved Quizzes System for E&M ---
function toggleSolutionEM(quizId) {
    const solutionDiv = document.getElementById("sol-em-" + quizId);
    const btn = document.querySelector(`#quiz-em-${quizId} .solution-btn`);
    const icon = btn.querySelector(".fa-chevron-down, .fa-chevron-up");
    
    if (solutionDiv.style.display === "block") {
        solutionDiv.style.display = "none";
        if (icon) {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    } else {
        solutionDiv.style.display = "block";
        if (icon) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        }
    }
}

function checkQuizEM(quizId, correctAnswer) {
    const inputVal = document.getElementById("ans-em-" + quizId).value.trim();
    const alertDiv = document.getElementById("alert-em-" + quizId);
    
    if (inputVal.toLowerCase() === correctAnswer.toLowerCase()) {
        alertDiv.className = "answer-alert success";
        alertDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> <b>Sahi Jawab!</b> Bilkul correct calculations hain.`;
    } else {
        alertDiv.className = "answer-alert error";
        alertDiv.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <b>Galat Jawab!</b> Ek baar calculations re-check karein ya solution open karke samjhein.`;
    }
}
