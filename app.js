/* =========================================================================
   APP.JS - Core Logic for Linear Algebra Hinglish Book & Interactive Visualizer
   ========================================================================= */

// --- 1. Chapter and Study Guide Data ---
const chapterData = {
    "unit1-intro": {
        title: "Euclidean Space $\\mathbb{R}^n$ and Vector Operations",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum Linear Algebra ka sabse fundamental aur exciting part shuru karne ja rahe hain: <b>Euclidean Space $\\mathbb{R}^n$</b>. Yeh topic aapki aage ki poori linear algebra journey ka base banayega. Chaliye bohot hi simple bhasha me samajhte hain!</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Definition: Euclidean Space $\\mathbb{R}^n$</h4>
                    <p>The set of all ordered $n$-tuples of real numbers is called the $n$-dimensional Euclidean Space, denoted by $\\mathbb{R}^n$.</p>
                    <p>$$\\mathbb{R}^n = \\{ (x_1, x_2, \\dots, x_n) \\mid x_i \\in \\mathbb{R} \\text{ for all } i = 1, 2, \\dots, n \\}$$</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Samjho Shuru Se (Hinglish Explanation)</h4>
                    <p>$\\mathbb{R}^n$ ka seedha aur aasan matlab hai <b>ek aisi space jahan har vector ke paas $n$ coordinates</b> hote hain:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>Agar $n=1$ hai, toh yeh ek normal number line hai ($\\mathbb{R}^1$).</li>
                        <li>Agar $n=2$ hai, toh yeh humara 2D plane hai ($\\mathbb{R}^2$), jise hum graphs me $(x, y)$ ki tarah plot karte hain.</li>
                        <li>Agar $n=3$ hai, toh yeh humara 3D real world space hai ($\\mathbb{R}^3$), jisme three-dimensional coordinates $(x, y, z)$ hote hain.</li>
                        <li>Agar $n > 3$ ho jaye, toh hum use visually toh nahi dekh sakte, par mathematically use $\\mathbb{R}^n$ bolte hain (jaise 4-dimensions ya 5-dimensions).</li>
                    </ul>
                </div>

                <h2>Fundamental Vector Operations</h2>
                <p>$\\mathbb{R}^n$ ke vectors par hum do main operations karte hain, jinhe humne high-school me bhi padha hai:</p>
                
                <h3>1. Vector Addition</h3>
                <p>Agar humare paas do vectors $u = (u_1, u_2, \\dots, u_n)^T$ aur $v = (v_1, v_2, \\dots, v_n)^T$ hain, toh unka sum $u + v$ component-wise add hota hai:</p>
                <p>$$u + v = \\begin{bmatrix} u_1 + v_1 \\\\ u_2 + v_2 \\\\ \\vdots \\\\ u_n + v_n \\end{bmatrix}$$</p>
                <p><i>Geometrically,</i> yeh dono vectors ke combine effect ko dikhata hai. Agar hum $\\mathbb{R}^2$ me do vectors add karein, toh unka sum "Triangle Law" ya "Parallelogram Law" se milta hai.</p>

                <h3>2. Scalar Multiplication</h3>
                <p>Scalar multiplication ka matlab hai kisi vector ko ek normal real number (scalar) $c$ se multiply karna. Isme vector ka har individual element $c$ se multiply ho jata hai:</p>
                <p>$$c \\cdot u = \\begin{bmatrix} c \\cdot u_1 \\\\ c \\cdot u_2 \\\\ \\vdots \\\\ c \\cdot u_n \\end{bmatrix}$$</p>
                <p><i>Geometrically,</i> yeh vector ki direction ko change nahi karta (agar $c > 0$ ho), bas uski lambai (magnitude) ko scale kar deta hai. Agar $c < 0$ ho, toh vector reverse direction me rotate ho jata hai.</p>

                <h2>Linear Combination of Vectors</h2>
                <div class="definition-card">
                    <h4><i class="fa-solid fa-circle-nodes"></i> Definition: Linear Combination</h4>
                    <p>Given vectors $v_1, v_2, \\dots, v_k \\in \\mathbb{R}^n$ and scalars $c_1, c_2, \\dots, c_k \\in \\mathbb{R}$, the vector:</p>
                    <p>$$w = c_1 v_1 + c_2 v_2 + \\dots + c_k v_k$$</p>
                    <p>is called a <b>linear combination</b> of the vectors $v_1, v_2, \\dots, v_k$.</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-brain"></i> Aao Ek Mazedaar Analogy Se Samjhein</h4>
                    <p>Socho ki aapke paas do buttons (vectors) hain $v_1$ aur $v_2$. $v_1$ ko press karne par aap 1 unit Right aur 2 units Up jate hain. $v_2$ ko press karne par aap 3 units Left aur 1 unit Down jate hain.</p>
                    <p><b>Linear Combination</b> kya hai? Aapne pehle button ko $c_1$ baar aur dusre button ko $c_2$ baar press kiya! Jo aapki final position hogi, wo in dono vectors ka linear combination hogi: $c_1 v_1 + c_2 v_2$.</p>
                </div>

                <!-- Interactive Quiz Section -->
                <div class="question-card" id="quiz-1">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 1: Vector Operations</h4>
                    <p>Given two vectors in $\\mathbb{R}^3$: $u = \\begin{bmatrix} 2 \\\\ -1 \\\\ 3 \\end{bmatrix}$ and $v = \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\end{bmatrix}$. Compute the linear combination $w = 3u - 2v$. Enter the coordinates of the resulting vector $w$ as comma-separated values (e.g. 1,2,3):</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-1" placeholder="Enter coordinates (e.g. 4,-3,13)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(1, '4,-3,13')">Check Answer</button>
                    </div>
                    <div id="alert-1" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(1)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-1">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Humein nikalna hai: $w = 3u - 2v$</p>
                            <p><b>Step 1: Compute $3u$ (Scalar multiplication of $u$ by 3):</b></p>
                            <p>$$3u = 3 \\begin{bmatrix} 2 \\\\ -1 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 3(2) \\\\ 3(-1) \\\\ 3(3) \\end{bmatrix} = \\begin{bmatrix} 6 \\\\ -3 \\\\ 9 \\end{bmatrix}$$</p>
                            <p><b>Step 2: Compute $2v$ (Scalar multiplication of $v$ by 2):</b></p>
                            <p>$$2v = 2 \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} 2(1) \\\\ 2(0) \\\\ 2(-2) \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 0 \\\\ -4 \\end{bmatrix}$$</p>
                            <p><b>Step 3: Subtract the two results ($3u - 2v$):</b></p>
                            <p>$$w = \\begin{bmatrix} 6 \\\\ -3 \\\\ 9 \\end{bmatrix} - \\begin{bmatrix} 2 \\\\ 0 \\\\ -4 \\end{bmatrix} = \\begin{bmatrix} 6-2 \\\\ -3-0 \\\\ 9-(-4) \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ -3 \\\\ 13 \\end{bmatrix}$$</p>
                            <p>So, standard representation format is: <b>4,-3,13</b>. Bohot hi simple hai na!</p>
                        </div>
                    </div>
                </div>

                <div class="info-text" style="margin-top: 30px; text-align: center;">
                    <p><i class="fa-solid fa-arrow-pointer"></i> <b>Tip:</b> Neeche diye gaye <b>Interactive Vector Visualizer Drawer</b> ko open kijiye aur Vector Addition aur Linear Combinations ko visually bante huye dekhiye!</p>
                </div>
            </div>
        `
    },
    "unit1-inequalities": {
        title: "Dot Product & Geometric Inequalities",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge do vectors ke aapas ke connection ko nikalna: <b>Dot Product (Inner Product)</b> aur isse banne wali standard university exam mathematical inequalities (Cauchy-Schwarz aur Triangle Inequality).</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Definition: Dot Product & Norm</h4>
                    <p>For vectors $u, v \\in \\mathbb{R}^n$, the dot product $u \\cdot v$ is defined as:</p>
                    <p>$$u \\cdot v = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n = u^T v$$</p>
                    <p>The <b>Norm</b> (or length) of a vector $u$ is denoted by $\\|u\\|$ and is defined as:</p>
                    <p>$$\\|u\\| = \\sqrt{u \\cdot u} = \\sqrt{u_1^2 + u_2^2 + \\dots + u_n^2}$$</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Dot Product Ko Feel Karo!</h4>
                    <p>Dot product humein batata hai ki <b>do vectors aapas me kitne aligned hain</b>:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>Agar dot product <b>positive</b> hai, toh dono vectors lagbhag same direction me ja rahe hain (acute angle).</li>
                        <li>Agar dot product <b>zero</b> hai ($u \\cdot v = 0$), toh dono vectors perfectly <b>perpendicular (orthogonal)</b> hain unke beech ka angle 90 degrees hai!</li>
                        <li>Agar dot product <b>negative</b> hai, toh dono vectors opposite directions me ja rahe hain (obtuse angle).</li>
                    </ul>
                </div>

                <h2>Key Geometric Inequalities (Exam Gold)</h2>
                <p>Aapke college exams me in dono inequalities me se ek ka proof har saal pucha jata hai. Inhe dhyan se samajhein:</p>

                <div class="theorem-card">
                    <h4><i class="fa-solid fa-certificate"></i> Theorem 1: Cauchy-Schwarz Inequality</h4>
                    <p>For any vectors $u, v \\in \\mathbb{R}^n$, the absolute value of their dot product is always less than or equal to the product of their norms:</p>
                    <p>$$|u \\cdot v| \\le \\|u\\| \\|v\\|$$</p>
                    <p>Equality holds if and only if $u$ and $v$ are linearly dependent (meaning they are parallel or scalar multiples of each other).</p>
                </div>

                <div class="theorem-card">
                    <h4><i class="fa-solid fa-certificate"></i> Theorem 2: Triangle Inequality</h4>
                    <p>For any vectors $u, v \\in \\mathbb{R}^n$, the length of their sum vector is always less than or equal to the sum of their individual lengths:</p>
                    <p>$$\\|u + v\\| \\le \\|u\\| + \\|v\\|$$</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-pen-nib"></i> Triangle Inequality Ka Easy Proof</h4>
                    <p>Chaliye iska elegant proof seekhte hain jo aapko full marks dilayega:</p>
                    <p>Norm ke square se shuru karte hain:</p>
                    <p>$$\\|u + v\\|^2 = (u + v) \\cdot (u + v)$$</p>
                    <p>$$= u \\cdot u + u \\cdot v + v \\cdot u + v \\cdot v$$</p>
                    <p>$$= \\|u\\|^2 + 2(u \\cdot v) + \\|v\\|^2$$</p>
                    <p>Ab, hum jante hain ki $u \\cdot v \\le |u \\cdot v|$. Cauchy-Schwarz inequality ko use karke hum likh sakte hain $u \\cdot v \\le \\|u\\| \\|v\\|$:</p>
                    <p>$$\\|u + v\\|^2 \\le \\|u\\|^2 + 2\\|u\\| \\|v\\| + \\|v\\|^2$$</p>
                    <p>$$= (\\|u\\| + \\|v\\|)^2$$</p>
                    <p>Dono taraf square root lene par:</p>
                    <p>$$\\|u + v\\| \\le \\|u\\| + \\|v\\|$$</p>
                    <p><b>Hence Proved!</b> Bohot hi easy proof hai.</p>
                </div>

                <!-- Quiz Part -->
                <div class="question-card" id="quiz-2">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 2: Dot Product & Verification</h4>
                    <p>Let $u = \\begin{bmatrix} 1 \\\\ 2 \\\\ -2 \\end{bmatrix}$ and $v = \\begin{bmatrix} 3 \\\\ 0 \\\\ 4 \\end{bmatrix}$ in $\\mathbb{R}^3$. Calculate the dot product $u \\cdot v$ and determine if Cauchy-Schwarz holds. Enter the numerical value of the dot product $u \\cdot v$ below:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-2" placeholder="Enter dot product (e.g. -5)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(2, '-5')">Check Answer</button>
                    </div>
                    <div id="alert-2" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(2)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-2">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Compute Dot Product $u \\cdot v$:</b></p>
                            <p>$$u \\cdot v = 1(3) + 2(0) + (-2)(4) = 3 + 0 - 8 = -5$$</p>
                            <p><b>Step 2: Calculate Norms $\\|u\\|$ and $\\|v\\|$ to verify inequality:</b></p>
                            <p>$$\\|u\\| = \\sqrt{1^2 + 2^2 + (-2)^2} = \\sqrt{1 + 4 + 4} = \\sqrt{9} = 3$$</p>
                            <p>$$\\|v\\| = \\sqrt{3^2 + 0^2 + 4^2} = \\sqrt{9 + 0 + 16} = \\sqrt{25} = 5$$</p>
                            <p><b>Step 3: Check Cauchy-Schwarz Inequality ($|u \\cdot v| \\le \\|u\\| \\|v\\|$):</b></p>
                            <p>$$|u \\cdot v| = |-5| = 5$$</p>
                            <p>$$\\|u\\| \\|v\\| = 3 \\times 5 = 15$$</p>
                            <p>Since $5 \\le 15$, the inequality holds! So the answer is <b>-5</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit1-reductions": {
        title: "Systems of Linear Equations & Row Reductions",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge Linear Algebra ka sabse powerful aur highly practical computation tools: <b>Row Reduction Techniques</b>. Inki help se hum kitne bhi bade system of linear equations ko easily solve kar sakte hain.</p>
                
                <h2>Row Echelon Forms (REF vs RREF)</h2>
                <p>Kisi bhi matrix ko solve karne ke liye hum use <b>Row Operations</b> se convert karte hain. Do key forms hoti hain:</p>

                <div class="definition-card">
                    <h4><i class="fa-solid fa-table-cells"></i> Row Echelon Form (REF)</h4>
                    <p>A matrix is in Row Echelon Form if:</p>
                    <ul class="bullet-list" style="margin-top: 4px;">
                        <li>Saari rows jinke saare elements zero hain, wo matrix ke sabse bottom par hon.</li>
                        <li>Kisi bhi row ka pehla non-zero entry (leading entry) uske upar wali row ke leading entry ke right me ho.</li>
                        <li>Kisi leading entry ke niche ke saare elements 0 hon.</li>
                    </ul>
                </div>

                <div class="definition-card">
                    <h4><i class="fa-solid fa-circle-check"></i> Reduced Row Echelon Form (RREF)</h4>
                    <p>Row Echelon Form ke sath agar yeh additional conditions ho jayein:</p>
                    <ul class="bullet-list" style="margin-top: 4px;">
                        <li>Har leading entry perfectly <b>1</b> ho (ise 'leading 1' bolte hain).</li>
                        <li>Har leading 1 ke column me baaki ke saare numbers 0 hon.</li>
                    </ul>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Gaussian Elimination vs Gauss-Jordan</h4>
                    <p><b>Gaussian Elimination</b> me hum matrix ko standard REF me convert karte hain aur fir <i>Back Substitution</i> karke saare variables nikalte hain.</p>
                    <p><b>Gauss-Jordan Elimination</b> me hum extra hard-work karke matrix ko seedhe RREF me convert kar dete hain, jisse humein back substitution ki zarurat nahi padti aur variables ke answers direct mil jate hain!</p>
                </div>

                <h2>Application: Curve Fitting</h2>
                <p>Row Reductions ka ek real-world application hai <b>Curve Fitting</b>. Agar humein plane me do-teen points diye hon, toh hum linear equations banakar ek unique polynomial draw kar sakte hain jo un points se pass karega!</p>

                <!-- Curve Fitting Quiz -->
                <div class="question-card" id="quiz-3">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 3: Curve Fitting with Systems</h4>
                    <p>Find the quadratic polynomial $y = ax^2 + bx + c$ that passes through the points $(1, 4)$, $(2, 9)$, and $(3, 16)$ using linear systems. What is the value of the coefficient $b$? Enter the number below:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-3" placeholder="Enter b (e.g. 2)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(3, '2')">Check Answer</button>
                    </div>
                    <div id="alert-3" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(3)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-3">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Formulate the equations by substituting $(x, y)$ points:</b></p>
                            <p>For $(1, 4)$: $a(1)^2 + b(1) + c = 4 \\implies a + b + c = 4$</p>
                            <p>For $(2, 9)$: $a(2)^2 + b(2) + c = 9 \\implies 4a + 2b + c = 9$</p>
                            <p>For $(3, 16)$: $a(3)^2 + b(3) + c = 16 \\implies 9a + 3b + c = 16$</p>
                            
                            <p><b>Step 2: Solve the Linear System using Row Operations:</b></p>
                            <p>Write Augmented Matrix:</p>
                            <p>$$\\begin{bmatrix} 1 & 1 & 1 & \\bigm| & 4 \\\\ 4 & 2 & 1 & \\bigm| & 9 \\\\ 9 & 3 & 1 & \\bigm| & 16 \\end{bmatrix}$$</p>
                            <p>Apply $R_2 \\to R_2 - 4R_1$ and $R_3 \\to R_3 - 9R_1$:</p>
                            <p>$$\\begin{bmatrix} 1 & 1 & 1 & \\bigm| & 4 \\\\ 0 & -2 & -3 & \\bigm| & -7 \\\\ 0 & -6 & -8 & \\bigm| & -20 \\end{bmatrix}$$</p>
                            <p>Apply $R_3 \\to R_3 - 3R_2$:</p>
                            <p>$$\\begin{bmatrix} 1 & 1 & 1 & \\bigm| & 4 \\\\ 0 & -2 & -3 & \\bigm| & -7 \\\\ 0 & 0 & 1 & \\bigm| & 1 \\end{bmatrix}$$</p>
                            <p>From Row 3, we get: $c = 1$.</p>
                            <p>Substitute $c=1$ in Row 2: $-2b - 3(1) = -7 \\implies -2b = -4 \\implies b = 2$.</p>
                            <p>Substitute $b=2, c=1$ in Row 1: $a + 2 + 1 = 4 \\implies a = 1$.</p>
                            <p>So the polynomial is $y = x^2 + 2x + 1$, and the value of $b$ is <b>2</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit1-eigenvalues": {
        title: "Eigenvalues, Eigenvectors & Diagonalization",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge linear algebra ka sabse high-weightage topic: <b>Eigenvalues, Eigenvectors aur Diagonalization</b>. Yeh concepts Google Search (PageRank) se lekar Quantum Physics aur Image Processing me use hote hain!</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-arrows-spin"></i> Eigenvalue and Eigenvector</h4>
                    <p>Let $A$ be an $n \\times n$ square matrix. A scalar $\\lambda$ is called an <b>eigenvalue</b> of $A$ if there exists a non-zero vector $x \\in \\mathbb{R}^n$ such that:</p>
                    <p>$$A x = \\lambda x$$</p>
                    <p>The vector $x$ is called an <b>eigenvector</b> corresponding to the eigenvalue $\\lambda$.</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-brain"></i> Isko Aasan Bhasha Me Samjho</h4>
                    <p>Normal times me jab hum kisi vector $x$ ko matrix $A$ se multiply karte hain ($Ax$), toh us vector ki direction aur length dono change ho jati hain.</p>
                    <p>Lekin agar $x$ ek <b>Eigenvector</b> hai, toh use $A$ se multiply karne par uski direction me koi badlav nahi aata! Wo vector usi line par rahta hai, bas uski length change hoti hai scalar factor $\\lambda$ (eigenvalue) ke linear scale me!</p>
                </div>

                <h2>How to Find Eigenvalues?</h2>
                <p>Eigenvalues ko nikalne ke liye hum solve karte hain matrix ki <b>Characteristic Equation</b>:</p>
                <p>$$\\det(A - \\lambda I) = 0$$</p>
                <p>Jahan $I$ identity matrix hai. Is equation ke roots hi eigenvalues hote hain.</p>

                <h2>Diagonalization of Matrices</h2>
                <div class="definition-card">
                    <h4><i class="fa-solid fa-border-none"></i> Diagonalization</h4>
                    <p>A matrix $A$ is diagonalizable if there exists an invertible matrix $P$ and a diagonal matrix $D$ such that:</p>
                    <p>$$P^{-1} A P = D$$</p>
                    <p>Where columns of $P$ are the eigenvectors of $A$, and the diagonal elements of $D$ are the corresponding eigenvalues.</p>
                </div>

                <!-- Quiz -->
                <div class="question-card" id="quiz-4">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 4: Eigenvalues & Diagonalization</h4>
                    <p>Let $A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$. Compute the eigenvalues of $A$ and enter them as comma-separated values in ascending order (e.g. -2,3):</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-4" placeholder="Enter eigenvalues (e.g. -1,3)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(4, '-1,3')">Check Answer</button>
                    </div>
                    <div id="alert-4" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(4)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-4">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p><b>Step 1: Set up Characteristic Equation:</b></p>
                            <p>$$\\det(A - \\lambda I) = 0 \\implies \\det\\begin{bmatrix} 1-\\lambda & 2 \\\\ 2 & 1-\\lambda \\end{bmatrix} = 0$$</p>
                            <p><b>Step 2: Solve the Determinant:</b></p>
                            <p>$$(1-\\lambda)(1-\\lambda) - 2(2) = 0$$</p>
                            <p>$$\\lambda^2 - 2\\lambda + 1 - 4 = 0 \\implies \\lambda^2 - 2\\lambda - 3 = 0$$</p>
                            <p><b>Step 3: Factorize the quadratic equation:</b></p>
                            <p>$$(\\lambda - 3)(\\lambda + 1) = 0 \\implies \\lambda = 3, \\quad \\lambda = -1$$</p>
                            <p>Toh eigenvalues hain <b>-1,3</b>! *(Tip: Visualizer me is matrix ko select karke angles rotate kijiye to see eigenvectors physically!)*</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit2-spaces": {
        title: "Vector Spaces & Preamble Axioms",
        html: `
            <div class="chapter-section">
                <p>Hello students! Welcome to Unit II. Ab hum normal coordinate vectors se aage badhkar, linear algebra ke sabse pure and beautiful conceptual framework: <b>Vector Spaces</b> par aayenge.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-shapes"></i> Definition: Vector Space</h4>
                    <p>A <b>Vector Space</b> $V$ over the field of real numbers $\\mathbb{R}$ is a set of elements (called vectors) together with two operations (Vector Addition and Scalar Multiplication) satisfying the following 8 fundamental axioms:</p>
                    <ol class="bullet-list" style="margin-top: 8px;">
                        <li>$u + v = v + u$ (Commutativity)</li>
                        <li>$(u + v) + w = u + (v + w)$ (Associativity)</li>
                        <li>$\\exists 0 \\in V \\text{ such that } u + 0 = u$ (Identity vector)</li>
                        <li>$\\forall u, \\exists -u \\in V \\text{ such that } u + (-u) = 0$ (Additive Inverse)</li>
                        <li>$c(u + v) = cu + cv$ (Scalar Distributivity I)</li>
                        <li>$(c + d)u = cu + du$ (Scalar Distributivity II)</li>
                        <li>$c(du) = (cd)u$ (Scalar Associativity)</li>
                        <li>$1 \\cdot u = u$ (Identity scalar)</li>
                    </ol>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Vector Space Ko Apni Bhasha Me Samjho!</h4>
                    <p>Vector space ka matlab koi 'space' (jagah) nahi hai. Yeh ek aisi <b>mathematical community ya club (set)</b> hai jo standard operations ke sath upar diye gaye 8 rules ko hamesha follow karti hai.</p>
                    <p>Is club ke members <b>sirf arrows (vectors) nahi hote</b>, inke alag-alag roop ho sakte hain:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>$\\mathbb{R}^n$: standard coordinate vectors.</li>
                        <li>$\\mathbb{P}_n$: Polynomials of degree $\\le n$ (kyuki do polynomials ko add karne par polynomial hi banta hai aur wo rules follow karta hai!).</li>
                        <li>$M_{m \\times n}$: All matrices of size $m \\times n$.</li>
                    </ul>
                </div>

                <div class="question-card" id="quiz-5">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 5: Vector Space Axioms</h4>
                    <p>Consider the set $V = \\mathbb{R}^+$ (all positive real numbers). Define vector addition as multiplication: $x \\oplus y = xy$, and scalar multiplication as exponentiation: $c \\odot x = x^c$. Does this set form a vector space? Enter 'yes' or 'no':</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-5" placeholder="Enter yes or no">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(5, 'yes')">Check Answer</button>
                    </div>
                    <div id="alert-5" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(5)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-5">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Ji haan, iska answer hai <b>yes</b>! Yeh ek standard university confusing question hai.</p>
                            <p><b>Check some core axioms:</b></p>
                            <p>1. <b>Additive Identity:</b> Humein ek aisi value $e$ chahiye jisse $x \\oplus e = x \\implies x \\cdot e = x \\implies e = 1$. So the 'zero vector' of this space is actually the number <b>1</b>!</p>
                            <p>2. <b>Additive Inverse:</b> Humein $-x$ chahiye jisse $x \\oplus (-x) = e \\implies x \\cdot (-x) = 1 \\implies -x = \\frac{1}{x}$. Since $x > 0$, $\\frac{1}{x}$ is also positive and belongs to $V$.</p>
                            <p>Dono operations saare 8 rules follow karte hain. Isliye $V$ ek solid, valid vector space hai!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit2-subspaces": {
        title: "Subspaces & Linear Span",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge ki kaise ek bade vector space ke andar ek chota space dhoondhte hain: <b>Subspaces</b> aur <b>Linear Span</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-book"></i> Definition: Subspace</h4>
                    <p>A subset $W$ of a vector space $V$ is called a <b>subspace</b> of $V$ if $W$ is itself a vector space under the same operations.</p>
                </div>

                <div class="theorem-card">
                    <h4><i class="fa-solid fa-certificate"></i> Theorem: Subspace Test</h4>
                    <p>To prove $W \\subseteq V$ is a subspace, you only need to verify 3 simple things:</p>
                    <ol class="bullet-list" style="margin-top: 4px;">
                        <li>The zero vector $0 \\in W$.</li>
                        <li><b>Closure under Addition:</b> If $u, v \\in W$, then $u + v \\in W$.</li>
                        <li><b>Closure under Scalar Multiplication:</b> If $u \\in W$ and $c \\in \\mathbb{R}$, then $c u \\in W$.</li>
                    </ol>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Samjho Geometrically!</h4>
                    <p>$\\mathbb{R}^3$ (humare 3D space) ke standard subspaces kaunse hain?</p>
                    <ul class="bullet-list" style="margin-top: 4px;">
                        <li>Origin point itself ($\\mathbf{0}$).</li>
                        <li>Koi bhi <b>straight line jo origin se pass karti ho</b>.</li>
                        <li>Koi bhi <b>flat plane jo origin se pass karta ho</b>.</li>
                        <li>Poori $\\mathbb{R}^3$ space khud.</li>
                    </ul>
                    <p>Note: Agar line ya plane origin se pass nahi karein, toh zero vector unme nahi hoga, isliye wo subspace nahi ho sakte!</p>
                </div>

                <h2>Linear Span</h2>
                <div class="definition-card">
                    <h4><i class="fa-solid fa-compass-drafting"></i> Linear Span</h4>
                    <p>The set of all linear combinations of a set of vectors $S = \\{v_1, v_2, \\dots, v_k\\}$ is called the <b>span</b> of $S$, denoted by $\\text{span}(S)$.</p>
                </div>

                <div class="question-card" id="quiz-6">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 6: Subspaces</h4>
                    <p>Is the set $W = \\{ (x, y)^T \\in \\mathbb{R}^2 \\mid xy \\ge 0 \\}$ (vectors in Q1 and Q3) a subspace of $\\mathbb{R}^2$? Enter 'yes' or 'no':</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-6" placeholder="Enter yes or no">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(6, 'no')">Check Answer</button>
                    </div>
                    <div id="alert-6" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(6)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-6">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Iska correct answer hai <b>no</b>! Chaliye counter-example se samajhte hain:</p>
                            <p>Let $u = \\begin{bmatrix} 1 \\\\ 3 \\end{bmatrix}$ (since $1 \\times 3 = 3 \\ge 0$, $u \\in W$) and $v = \\begin{bmatrix} -2 \\\\ -1 \\end{bmatrix}$ (since $-2 \\times -1 = 2 \\ge 0$, $v \\in W$).</p>
                            <p><b>Check Closure under Addition:</b></p>
                            <p>$$u + v = \\begin{bmatrix} 1 + (-2) \\\\ 3 + (-1) \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$$</p>
                            <p>Here, $x = -1, y = 2 \\implies xy = -1 \\times 2 = -2 < 0$.</p>
                            <p>Since the sum $u+v \\notin W$, the set is <b>not closed under addition</b>, and hence it is <b>not a subspace</b>.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit2-independence": {
        title: "Linear Independence & Dependence",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge vectors ki redundancy ko check karna: <b>Linear Independence (LI) vs Linear Dependence (LD)</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-arrows-split-up-and-left"></i> Linear Independence</h4>
                    <p>A set of vectors $\\{v_1, v_2, \\dots, v_k\\}$ is <b>linearly independent</b> if the only scalars that satisfy:</p>
                    <p>$$c_1 v_1 + c_2 v_2 + \\dots + c_k v_k = 0$$</p>
                    <p>are the trivial solutions: $c_1 = c_2 = \\dots = c_k = 0$.</p>
                    <p>If there is any non-trivial solution (where at least one scalar is non-zero), the set is <b>linearly dependent</b>.</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Iska Practical Matlab Samjhein!</h4>
                    <p>Bina confusing definitions ke simple tarike se samjhein:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li><b>Linearly Dependent (LD):</b> Matlab aapke set me "faltu ya duplicate" vectors hain. Koi na koi ek vector aisa hai jise baaki ke vectors ko add/multiply karke banaya ja sakta hai.</li>
                        <li><b>Linearly Independent (LI):</b> Matlab saare vectors bilkul unique aur independent hain. Kisi bhi vector ko baaki ke vectors se nahi banaya ja sakta.</li>
                    </ul>
                </div>

                <h2>How to check inside exams?</h2>
                <p>Exam me check karne ke liye saare vectors ko <b>columns ki tarah ek matrix me likho</b> aur us matrix ki Echelon Form (REF) nikalo:</p>
                <ul class="bullet-list">
                    <li>Agar har column me <b>Pivot Element</b> mile, toh vectors <b>Linearly Independent (LI)</b> hain!</li>
                    <li>Agar koi free variable (ya bina pivot wala column) mile, toh vectors <b>Linearly Dependent (LD)</b> hain!</li>
                </ul>

                <div class="question-card" id="quiz-7">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 7: Independence Test</h4>
                    <p>Determine if the vectors $v_1 = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$ and $v_2 = \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}$ in $\\mathbb{R}^2$ are independent. Enter 'LI' or 'LD' below:</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-7" placeholder="Enter LI or LD">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(7, 'LD')">Check Answer</button>
                    </div>
                    <div id="alert-7" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(7)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-7">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Iska correct answer hai <b>LD</b> (Linearly Dependent).</p>
                            <p>Visual verification: $v_2 = \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = 3 \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = 3 v_1$.</p>
                            <p>Chunki $v_2$, $v_1$ ka direct scalar multiple hai, isliye dono parallel lines par hain aur aapas me dependent hain. Non-trivial solution: $3v_1 - v_2 = 0$.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit2-basis": {
        title: "Basis & Dimension of Vector Spaces",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum linear algebra ke ek aur milestone concept ko complete karenge: <b>Basis</b> aur <b>Dimension</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-compass-drafting"></i> Definition: Basis</h4>
                    <p>A set of vectors $B = \\{v_1, v_2, \\dots, v_n\\}$ in a vector space $V$ is called a <b>basis</b> for $V$ if:</p>
                    <ol class="bullet-list" style="margin-top: 4px;">
                        <li>$B$ is Linearly Independent (LI).</li>
                        <li>$B$ spans $V$ (meaning every vector in $V$ can be represented as their linear combination).</li>
                    </ol>
                    <p>The number of elements in a basis of $V$ is called the <b>Dimension</b> of $V$, denoted by $\\dim(V)$.</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Basis Ko Dil Se Samjho!</h4>
                    <p>Basis basically kisi vector space ka <b>"Minimum Generator Kit"</b> hota hai:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>Wo itna chota hota hai ki usme koi faltu (dependent) vector nahi hota.</li>
                        <li>Wo itna bada hota hai ki poore space ke kisi bhi element ko generate kar sake!</li>
                        <li>Jaise 2D plane ($\\mathbb{R}^2$) ka standard basis hai $i = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, j = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$. Kyuki $\\dim(\\mathbb{R}^2) = 2$!</li>
                    </ul>
                </div>

                <div class="question-card" id="quiz-8">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 8: Dimension of Subspaces</h4>
                    <p>Let $W$ be the subspace of $\\mathbb{R}^3$ consisting of all vectors whose components sum to zero, i.e., $x + y + z = 0$. What is the dimension of $W$? Enter the integer below:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-8" placeholder="Enter dimension">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(8, '2')">Check Answer</button>
                    </div>
                    <div id="alert-8" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(8)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-8">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Correct answer is <b>2</b>.</p>
                            <p><b>Aao basis banayein:</b></p>
                            <p>We know: $x + y + z = 0 \\implies x = -y - z$.</p>
                            <p>Vectors ko parametric form me likhein:</p>
                            <p>$$\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} -y-z \\\\ y \\\\ z \\end{bmatrix} = y \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix} + z \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$$</p>
                            <p>Dono vectors $\\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$ aur $\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$ linearly independent hain aur poore $W$ ko span karte hain. Isliye basis me 2 vectors hain, aur $\\dim(W) = 2$! (Geometrically, yeh origin se pass hone wala plane hai).</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit3-transformations": {
        title: "Linear Transformations & Standard Matrices",
        html: `
            <div class="chapter-section">
                <p>Hello students! Welcome to Unit III. Ab hum seekhenge ki kaise ek vector space ke vectors ko doosre vector space ke vectors me convert kiya jata hai ek beautiful dynamic ruleset ke according: <b>Linear Transformations</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-shuffle"></i> Core Definition: Linear Transformation</h4>
                    <p>A mapping $T: V \\to W$ is a <b>linear transformation</b> if it satisfies the following two properties for all vectors $u, v \\in V$ and scalars $c \\in \\mathbb{R}$:</p>
                    <ol class="bullet-list" style="margin-top: 4px;">
                        <li><b>Additivity:</b> $T(u + v) = T(u) + T(v)$</li>
                        <li><b>Homogeneity:</b> $T(c u) = c T(u)$</li>
                    </ol>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Isko "Machine Analogy" Se Samjho</h4>
                    <p>Linear Transformation ek aisi machine ($T$) hai jo $V$ se vectors lekar $W$ me converts karti hai bina unke base linear relationships ko tode:</p>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li>Agar aap do vectors ko jod kar machine me dalte hain ($T(u+v)$), ya unhe alag-alag daal kar output ko jodein ($T(u) + T(v)$), toh output hamesha same aayega!</li>
                        <li><b>Note:</b> Kisi bhi linear transformation me zero vector hamesha zero vector par hi transform hota hai, yaani $T(\\mathbf{0}) = \\mathbf{0}$. Agar kisi machine me zero ka output zero na ho, toh wo linear nahi hai!</li>
                    </ul>
                </div>

                <h2>Standard Matrix of a Linear Transformation</h2>
                <p>$\\mathbb{R}^n$ se $\\mathbb{R}^m$ ke har linear transformation ko hum hamesha ek standard Matrix Multiplication ki form me represent kar sakte hain: $T(x) = A x$.</p>
                <p>Matrix $A$ ko nikalne ke liye hum standard basis vectors $e_1, e_2, \\dots, e_n$ ko transform karte hain aur unhe columns me fit kar dete hain:</p>
                <p>$$A = \\begin{bmatrix} T(e_1) & T(e_2) & \\dots & T(e_n) \\end{bmatrix}$$</p>

                <div class="question-card" id="quiz-9">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 9: Standard Matrices</h4>
                    <p>Let $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ be a linear transformation defined by $T(x, y) = (3x + y, x - 2y)^T$. Find the standard matrix $A$ of $T$. Enter the elements of the matrix as comma-separated values row by row (e.g. 1,2,3,4 for a 2x2 matrix):</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-9" placeholder="Enter matrix (e.g. 3,1,1,-2)">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(9, '3,1,1,-2')">Check Answer</button>
                    </div>
                    <div id="alert-9" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(9)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-9">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Correct matrix representation: <b>3,1,1,-2</b> (meaning $\\begin{bmatrix} 3 & 1 \\\\ 1 & -2 \\end{bmatrix}$).</p>
                            <p><b>Step 1: Apply $T$ to standard basis vector $e_1 = (1, 0)^T$:</b></p>
                            <p>$$T(e_1) = T(1, 0) = \\begin{bmatrix} 3(1) + 0 \\\\ 1 - 2(0) \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$$</p>
                            <p><b>Step 2: Apply $T$ to standard basis vector $e_2 = (0, 1)^T$:</b></p>
                            <p>$$T(e_2) = T(0, 1) = \\begin{bmatrix} 3(0) + 1 \\\\ 0 - 2(1) \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -2 \\end{bmatrix}$$</p>
                            <p><b>Step 3: Construct matrix $A$:</b></p>
                            <p>$$A = \\begin{bmatrix} T(e_1) & T(e_2) \\end{bmatrix} = \\begin{bmatrix} 3 & 1 \\\\ 1 & -2 \\end{bmatrix}$$</p>
                            <p>Row by row, values are: 3, 1 (first row) and 1, -2 (second row). So standard format is <b>3,1,1,-2</b>!</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit3-kernel": {
        title: "Kernel, Range & Rank-Nullity Theorem",
        html: `
            <div class="chapter-section">
                <p>Hello students! Aaj hum seekhenge linear mapping ke do sabse important spaces: <b>Kernel</b> aur <b>Range</b>, aur unhe aapas me connect karne wala high-yield <b>Rank-Nullity Theorem</b>.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-bullseye"></i> Definition: Kernel and Range</h4>
                    <ul class="bullet-list" style="margin-top: 8px;">
                        <li><b>Kernel (Null Space):</b> The set of all vectors in input space $V$ that map perfectly to the zero vector in $W$:
                        $$\\ker(T) = \\{ v \\in V \\mid T(v) = 0_W \\}$$
                        Its dimension is called the <b>Nullity</b> of $T$.</li>
                        <li><b>Range (Image):</b> The set of all vectors in output space $W$ that are hit by some input vector from $V$:
                        $$\\text{Range}(T) = \\{ T(v) \\mid v \\in V \\}$$
                        Its dimension is called the <b>Rank</b> of $T$.</li>
                    </ul>
                </div>

                <h2>Rank-Nullity Theorem (The Ultimate Equation)</h2>
                <div class="theorem-card">
                    <h4><i class="fa-solid fa-certificate"></i> Theorem: Rank-Nullity Theorem</h4>
                    <p>Let $T: V \\to W$ be a linear transformation where $V$ is finite-dimensional. Then:</p>
                    <p>$$\\text{rank}(T) + \\text{nullity}(T) = \\dim(V)$$</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-brain"></i> Aasan Bhasha Me Isko Samjhein!</h4>
                    <p>Socho ki aapke paas ek total input resources (yani $\\dim(V)$) hain. Jab aap unhe linear system ke throughput se guzaarte hain, toh wo resources do jagah bat te hain:</p>
                    <ol class="bullet-list" style="margin-top: 6px;">
                        <li>Jo successfully output me transform ho gaye (yani $\\text{rank}(T)$).</li>
                        <li>Jo collapse hokar completely zero/redundant ban gaye (yani $\\text{nullity}(T)$).</li>
                    </ol>
                    <p>Dono ka total sum hamesha pure system ki input dimensions ($\\dim(V)$) ke perfectly barabar hoga. Universe ki energy conservation ki tarah!</p>
                </div>

                <div class="question-card" id="quiz-10">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 10: Rank-Nullity</h4>
                    <p>Let $T: \\mathbb{R}^3 \\to \\mathbb{R}^2$ be a linear transformation defined by $T(x, y, z) = (x + y, y + z)^T$. We found that the basis of $\\ker(T)$ contains only 1 vector, so $\\text{nullity}(T) = 1$. What is the rank (dimension of range) of $T$? Enter the integer below:</p>
                    
                    <div class="question-input-area">
                        <input type="number" id="ans-10" placeholder="Enter rank">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(10, '2')">Check Answer</button>
                    </div>
                    <div id="alert-10" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(10)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-10">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Correct answer is <b>2</b>.</p>
                            <p>Humein Rank-Nullity Theorem pata hai:</p>
                            <p>$$\\text{rank}(T) + \\text{nullity}(T) = \\dim(V)$$</p>
                            <p>Yahan input space $V = \\mathbb{R}^3$, so $\\dim(V) = 3$.</p>
                            <p>Humein diya gaya hai ki $\\text{nullity}(T) = 1$.</p>
                            <p>$$\\text{rank}(T) + 1 = 3 \\implies \\text{rank}(T) = 3 - 1 = 2$$</p>
                            <p>Bohot hi speed se solve ho gaya na! Pure concepts aligned hain.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    "unit3-isomorphisms": {
        title: "Isomorphisms & Invertibility",
        html: `
            <div class="chapter-section">
                <p>Hello students! Welcome to the final topic of the book: <b>Isomorphisms and Invertibility</b>. Aaj hum seekhenge ki kab do alag-alag vector spaces mathematically bilkul identical hote hain.</p>
                
                <div class="definition-card">
                    <h4><i class="fa-solid fa-gem"></i> Definition: Isomorphism</h4>
                    <p>A linear transformation $T: V \\to W$ is an <b>Isomorphism</b> if it satisfies two conditions:</p>
                    <ul class="bullet-list" style="margin-top: 4px;">
                        <li><b>One-to-One (Injective):</b> $T$ maps unique inputs to unique outputs. (Condition: $\\ker(T) = \\{0\\}$, i.e., $\\text{nullity}(T) = 0$).</li>
                        <li><b>Onto (Surjective):</b> Every element in $W$ is covered by the mapping. (Condition: $\\text{rank}(T) = \\dim(W)$).</li>
                    </ul>
                    <p>If such a mapping exists, the vector spaces $V$ and $W$ are called <b>Isomorphic</b> ($V \\cong W$).</p>
                </div>

                <div class="hinglish-card">
                    <h4><i class="fa-solid fa-lightbulb"></i> Isomorphic Ko Dil Se Samjhein</h4>
                    <p>Isomorphic ka asan matlab hai <b>"Mathematical Twins" ya "Humshakal"</b>. Agar do vector spaces isomorphic hain ($V \\cong W$), toh unke elements bhale hi dekhne me alag hon (jaise ek side polynomials ho aur ek side vectors), par unki core internal mathematics, addition, dimensions, aur scalar scaling properties bilkul same rahengi!</p>
                    <p><b>Note (Fundamental Theorem):</b> Two finite-dimensional vector spaces are isomorphic <b>if and only if they have the same dimension</b>! (e.g. $\\mathbb{R}^3 \\cong \\mathbb{P}_2$ kyuki dono ki dimension 3 hai!)</p>
                </div>

                <div class="question-card" id="quiz-11">
                    <h4><i class="fa-solid fa-circle-question"></i> Practice Question 11: Isomorphisms</h4>
                    <p>Does there exist an isomorphism between $\\mathbb{R}^4$ (4D vectors) and $\\mathbb{P}_3$ (polynomials of degree $\\le 3$)? Enter 'yes' or 'no':</p>
                    
                    <div class="question-input-area">
                        <input type="text" id="ans-11" placeholder="Enter yes or no">
                        <button class="btn btn-primary btn-sm" onclick="checkQuiz(11, 'yes')">Check Answer</button>
                    </div>
                    <div id="alert-11" class="answer-alert"></div>
                    
                    <div class="solution-container">
                        <button class="solution-btn" onclick="toggleSolution(11)">
                            <span><i class="fa-solid fa-eye"></i> Show Step-by-Step Solution</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </button>
                        <div class="solution-content" id="sol-11">
                            <h5>Detailed Solution (Hinglish):</h5>
                            <p>Correct answer is <b>yes</b>!</p>
                            <p><b>Chaliye check karte hain dono ki dimensions:</b></p>
                            <p>1. Vector space $\\mathbb{R}^4$ ki dimension $\\dim(\\mathbb{R}^4) = 4$ hoti hai.</p>
                            <p>2. Polynomial space $\\mathbb{P}_3$ (jisme polynomials $a + bx + cx^2 + dx^3$ aate hain) ki dimension $\\dim(\\mathbb{P}_3) = 4$ hoti hai (kyuki basis me four coefficients $a,b,c,d$ generate hote hain: $\\{1, x, x^2, x^3\\}$).</p>
                            <p>Chunki dono finite vector spaces ki dimensions barabar hain ($4 = 4$), isliye linear algebra rules ke according dono <b>isomorphic</b> hain! Aur unke beech ek unique one-to-one and onto isomorphism exist karta hai.</p>
                        </div>
                    </div>
                </div>

                <div class="hinglish-card" style="background: rgba(16, 185, 129, 0.05); border-color: rgba(16, 185, 129, 0.25);">
                    <h4><i class="fa-solid fa-lightbulb"></i> Isomorphism Concept Summary</h4>
                    <p>Isomorphism linear algebra ka ek highly powerful aur elegant concept hai jo batata hai ki different-looking spaces mathematically identical ho sakti hain agar unki dimensions barabar hon. Yeh concept calculations ko bohot simplistic aur unified bana deta hai!</p>
                </div>
            </div>
        `
    }
};

// --- 2. State Variables ---
let currentTheme = "dark";
let currentCourse = "linear-algebra";
let activeChapter = "unit1-intro";
let visualizerOpen = false;
let visualizerMode = "addition";

// --- Vector Variables for Canvas ---
let vecU = { x: 3, y: 2 };
let vecV = { x: 1, y: -3 };
let scalarC1 = 1.5;
let scalarC2 = -0.8;

// Matrix T variables
let matrixT = { a: 1.5, b: 0.5, c: 0, d: 1 };
let animProgress = 1; // 0 to 1 for matrix animation
let animInterval = null;

// Eigenvalue variables
let eigenAngle = 45; // in degrees
const matrixEigenA = { a: 1, b: 2, c: 2, d: 1 }; // [1, 2; 2, 1]

// --- E&M State Variables ---
let emParams = {
    qmag: 3,         // nC
    qdist: 3.0,      // dipole separation in meters
    chargeConfig: "dipole", // single-pos, single-neg, dipole
    
    gcharge: 2,      // gauss net charge in nC
    gradius: 2.5,    // gauss surface radius in meters
    gx: 0.0,         // charge x position in grid units
    gy: 0.0,         // charge y position in grid units
    gcharge_enc: 2,  // enclosed charge magnitude
    
    lcharge: 1.0,    // lorentz charge in uC
    lvel: 3.0,       // lorentz velocity in m/s
    lmag: 1.5,       // lorentz B field in T
    lmass: 1.0,      // lorentz mass in ug
    lorentzAnimTime: 0,
    lorentzRunning: false,
    
    bcurrent: 15,    // biot-savart wire current in A
    bdist: 2.0,      // biot-savart wire distance in meters
    
    scurrent: 2.0,   // solenoid current in A
    sdensity: 12,    // solenoid turn density in turns/cm
    score: 1         // solenoid core relative permeability
};

let isDraggingCharge = false;

// --- 3. Dynamic Menu Structure & Course Switcher ---
const laMenuStructure = [
    {
        section: "Unit I: Euclidean Space & Matrices",
        items: [
            { id: "unit1-intro", label: "Euclidean Space $\\mathbb{R}^n$", icon: "fa-cube" },
            { id: "unit1-inequalities", label: "Inequalities & Dot Product", icon: "fa-scale-balanced" },
            { id: "unit1-reductions", label: "Systems & Row Reductions", icon: "fa-table-cells" },
            { id: "unit1-eigenvalues", label: "Eigenvalues & Diagonalization", icon: "fa-arrows-spin" }
        ]
    },
    {
        section: "Unit II: Intro to Vector Spaces",
        items: [
            { id: "unit2-spaces", label: "Vector Spaces & Axioms", icon: "fa-shapes" },
            { id: "unit2-subspaces", label: "Subspaces & Linear Span", icon: "fa-circle-nodes" },
            { id: "unit2-independence", label: "Linear Independence", icon: "fa-arrows-split-up-and-left" },
            { id: "unit2-basis", label: "Basis & Dimension", icon: "fa-compass-drafting" }
        ]
    },
    {
        section: "Unit III: Linear Transformations",
        items: [
            { id: "unit3-transformations", label: "Core Transformations", icon: "fa-shuffle" },
            { id: "unit3-kernel", label: "Kernel, Range & Nullity", icon: "fa-bullseye" },
            { id: "unit3-isomorphisms", label: "Isomorphisms & Invertibility", icon: "fa-gem" }
        ]
    }
];

function renderSidebarMenu() {
    const menuEl = document.getElementById("sidebar-menu-dynamic");
    if (!menuEl) return;
    
    menuEl.innerHTML = "";
    const structure = currentCourse === "linear-algebra" ? laMenuStructure : emMenuStructure;
    
    structure.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "menu-section";
        
        const h3 = document.createElement("h3");
        h3.textContent = section.section;
        sectionDiv.appendChild(h3);
        
        const ul = document.createElement("ul");
        section.items.forEach(item => {
            const li = document.createElement("li");
            li.setAttribute("data-target", item.id);
            if (activeChapter === item.id) {
                li.className = "active";
            }
            
            li.innerHTML = `<i class="fa-solid ${item.icon}"></i> ${item.label}`;
            li.addEventListener("click", () => {
                menuEl.querySelectorAll("li").forEach(el => el.classList.remove("active"));
                li.classList.add("active");
                loadChapter(item.id);
            });
            
            ul.appendChild(li);
        });
        
        sectionDiv.appendChild(ul);
        menuEl.appendChild(sectionDiv);
    });
}

function switchCourse(courseId) {
    currentCourse = courseId;
    
    const logoIcon = document.querySelector("#app-logo .logo-icon i");
    const logoText = document.querySelector("#app-logo .logo-text");
    const badge = document.getElementById("app-badge");
    const downloadBtn = document.querySelector(".header-right a");
    
    if (currentCourse === "linear-algebra") {
        activeChapter = "unit1-intro";
        logoIcon.className = "fa-solid fa-square-root-variable";
        logoText.innerHTML = "Linear<span>Algebra</span>";
        badge.textContent = "DSC-2";
        downloadBtn.setAttribute("href", "dsc2_linear_algebra_hinglish.pdf");
        downloadBtn.innerHTML = `<i class="fa-solid fa-file-pdf"></i> Download LaTeX PDF`;
        
        populateVisualizerModes([
            { value: "addition", label: "Vector Addition (u + v)" },
            { value: "combination", label: "Linear Combination (c₁u + c₂v)" },
            { value: "transformation", label: "Linear Transformation (T(x))" },
            { value: "eigenvalue", label: "Eigenvectors & Eigenvalues (Ax = λx)" }
        ]);
        
    } else {
        activeChapter = "em-ch1";
        logoIcon.className = "fa-solid fa-bolt";
        logoText.innerHTML = "Electro<span>Magnetism</span>";
        badge.textContent = "PYQ-CORE";
        downloadBtn.setAttribute("href", "electricity_magnetism_revision.pdf");
        downloadBtn.innerHTML = `<i class="fa-solid fa-file-pdf"></i> Download E&M PDF`;
        
        populateVisualizerModes([
            { value: "field-lines", label: "Electric Field Lines (Charge/Dipole)" },
            { value: "gauss-law", label: "Gauss's Law (Flux Verification)" },
            { value: "lorentz-force", label: "Lorentz Force (Circular Trajectory)" },
            { value: "biot-savart", label: "Biot-Savart Law (Straight Wire)" },
            { value: "solenoid", label: "Solenoid Field (Ampere's Law)" }
        ]);
    }
    
    renderSidebarMenu();
    loadChapter(activeChapter);
    
    // Auto-trigger change event on visualizer selector
    const modeSelect = document.getElementById("visualizer-mode");
    if (modeSelect) modeSelect.dispatchEvent(new Event("change"));
}

function populateVisualizerModes(modes) {
    const modeSelect = document.getElementById("visualizer-mode");
    if (!modeSelect) return;
    
    modeSelect.innerHTML = "";
    modes.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.value;
        opt.textContent = m.label;
        modeSelect.appendChild(opt);
    });
}

// --- 4. DOM Elements & Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", toggleTheme);
    
    // Visualizer panel drawer toggling
    const visualizerPanel = document.getElementById("visualizer-panel");
    const visualizerToggleBtn = document.getElementById("visualizer-toggle-btn");
    visualizerToggleBtn.addEventListener("click", () => {
        visualizerOpen = !visualizerOpen;
        if (visualizerOpen) {
            visualizerPanel.classList.remove("collapsed");
            resizeCanvas();
        } else {
            visualizerPanel.classList.add("collapsed");
        }
    });

    // Handle Visualizer Mode changes
    const modeSelect = document.getElementById("visualizer-mode");
    modeSelect.addEventListener("change", (e) => {
        visualizerMode = e.target.value;
        
        // Hide all control groups
        document.getElementById("controls-vectors").classList.add("hidden");
        document.getElementById("controls-scalars").classList.add("hidden");
        document.getElementById("controls-matrix").classList.add("hidden");
        document.getElementById("controls-eigen").classList.add("hidden");
        
        // E&M control groups
        document.getElementById("controls-em-charges").classList.add("hidden");
        document.getElementById("controls-em-gauss").classList.add("hidden");
        document.getElementById("controls-em-lorentz").classList.add("hidden");
        document.getElementById("controls-em-biot").classList.add("hidden");
        document.getElementById("controls-em-solenoid").classList.add("hidden");
        
        // Show required control groups
        if (visualizerMode === "addition") {
            document.getElementById("controls-vectors").classList.remove("hidden");
        } else if (visualizerMode === "combination") {
            document.getElementById("controls-vectors").classList.remove("hidden");
            document.getElementById("controls-scalars").classList.remove("hidden");
        } else if (visualizerMode === "transformation") {
            document.getElementById("controls-matrix").classList.remove("hidden");
        } else if (visualizerMode === "eigenvalue") {
            document.getElementById("controls-eigen").classList.remove("hidden");
        } else if (visualizerMode === "field-lines") {
            document.getElementById("controls-em-charges").classList.remove("hidden");
        } else if (visualizerMode === "gauss-law") {
            document.getElementById("controls-em-gauss").classList.remove("hidden");
        } else if (visualizerMode === "lorentz-force") {
            document.getElementById("controls-em-lorentz").classList.remove("hidden");
        } else if (visualizerMode === "biot-savart") {
            document.getElementById("controls-em-biot").classList.remove("hidden");
        } else if (visualizerMode === "solenoid") {
            document.getElementById("controls-em-solenoid").classList.remove("hidden");
        }
        
        drawGridAndVectors();
    });

    // Vector u, v slider listeners
    setupSlider("ux", (val) => { vecU.x = val; drawGridAndVectors(); });
    setupSlider("uy", (val) => { vecU.y = val; drawGridAndVectors(); });
    setupSlider("vx", (val) => { vecV.x = val; drawGridAndVectors(); });
    setupSlider("vy", (val) => { vecV.y = val; drawGridAndVectors(); });
    
    // Scalar slider listeners
    setupSlider("c1", (val) => { scalarC1 = val; drawGridAndVectors(); });
    setupSlider("c2", (val) => { scalarC2 = val; drawGridAndVectors(); });
    
    // Matrix slider listeners
    setupSlider("ma", (val) => { matrixT.a = val; animProgress = 1; drawGridAndVectors(); });
    setupSlider("mb", (val) => { matrixT.b = val; animProgress = 1; drawGridAndVectors(); });
    setupSlider("mc", (val) => { matrixT.c = val; animProgress = 1; drawGridAndVectors(); });
    setupSlider("md", (val) => { matrixT.d = val; animProgress = 1; drawGridAndVectors(); });
    
    // Matrix Animate Button
    document.getElementById("btn-animate-matrix").addEventListener("click", () => {
        animateMatrixTransformation();
    });

    // Eigenvalue slider listeners
    setupSlider("angle", (val) => { 
        eigenAngle = val; 
        document.getElementById("val-angle").textContent = val + "°";
        drawGridAndVectors(); 
    });

    // E&M Sliders & Selects Setup
    setupSlider("qmag", (val) => { emParams.qmag = val; drawGridAndVectors(); });
    setupSlider("qdist", (val) => { emParams.qdist = val; drawGridAndVectors(); });
    setupSlider("gcharge", (val) => { 
        emParams.gcharge = val; 
        updateGaussFluxDisplay();
        drawGridAndVectors(); 
    });
    setupSlider("gradius", (val) => { 
        emParams.gradius = val; 
        updateGaussFluxDisplay();
        drawGridAndVectors(); 
    });
    setupSlider("lcharge", (val) => { emParams.lcharge = val; updateLorentzRadiusDisplay(); drawGridAndVectors(); });
    setupSlider("lvel", (val) => { emParams.lvel = val; updateLorentzRadiusDisplay(); drawGridAndVectors(); });
    setupSlider("lmag", (val) => { emParams.lmag = val; updateLorentzRadiusDisplay(); drawGridAndVectors(); });
    setupSlider("lmass", (val) => { emParams.lmass = val; updateLorentzRadiusDisplay(); drawGridAndVectors(); });
    
    setupSlider("bcurrent", (val) => { emParams.bcurrent = val; updateBiotFieldDisplay(); drawGridAndVectors(); });
    setupSlider("bdist", (val) => { emParams.bdist = val; updateBiotFieldDisplay(); drawGridAndVectors(); });
    
    setupSlider("scurrent", (val) => { emParams.scurrent = val; updateSolenoidFieldDisplay(); drawGridAndVectors(); });
    setupSlider("sdensity", (val) => { emParams.sdensity = val; updateSolenoidFieldDisplay(); drawGridAndVectors(); });
    setupSlider("score", (val) => { 
        emParams.score = val; 
        const coreLabel = document.getElementById("val-score");
        if (val === 1) coreLabel.textContent = "1 (Air)";
        else if (val < 50) coreLabel.textContent = val + " (Cobalt)";
        else if (val < 100) coreLabel.textContent = val + " (Nickel)";
        else coreLabel.textContent = val + " (Iron)";
        updateSolenoidFieldDisplay(); 
        drawGridAndVectors(); 
    });

    document.getElementById("charge-config").addEventListener("change", (e) => {
        emParams.chargeConfig = e.target.value;
        const qdistItem = document.getElementById("item-qdist");
        if (emParams.chargeConfig === "dipole") qdistItem.classList.remove("hidden");
        else qdistItem.classList.add("hidden");
        drawGridAndVectors();
    });

    // Lorentz force play simulation
    let lorentzInterval = null;
    document.getElementById("btn-play-lorentz").addEventListener("click", () => {
        emParams.lorentzRunning = !emParams.lorentzRunning;
        const btn = document.getElementById("btn-play-lorentz");
        if (emParams.lorentzRunning) {
            btn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Simulation`;
            lorentzInterval = setInterval(() => {
                emParams.lorentzAnimTime += 0.05;
                drawGridAndVectors();
            }, 30);
        } else {
            btn.innerHTML = `<i class="fa-solid fa-play"></i> Run Particle Simulation`;
            if (lorentzInterval) clearInterval(lorentzInterval);
        }
    });

    // Course Selector Initial Trigger
    document.getElementById("course-select").addEventListener("change", (e) => {
        switchCourse(e.target.value);
    });

    // Canvas Mouse Events for Gauss Dragging Charge
    const mainCanvas = document.getElementById("vector-canvas");
    mainCanvas.addEventListener("mousedown", (e) => {
        if (currentCourse !== "electricity-magnetism" || visualizerMode !== "gauss-law") return;
        
        const rect = mainCanvas.getBoundingClientRect();
        const originX = mainCanvas.width / 2;
        const originY = mainCanvas.height / 2;
        
        const clickX = ((e.clientX - rect.left) - originX) / scaleFactor;
        const clickY = -(((e.clientY - rect.top) - originY) / scaleFactor);
        
        const dx = clickX - emParams.gx;
        const dy = clickY - emParams.gy;
        
        if (Math.sqrt(dx*dx + dy*dy) < 0.8) {
            isDraggingCharge = true;
        }
    });

    mainCanvas.addEventListener("mousemove", (e) => {
        if (!isDraggingCharge || currentCourse !== "electricity-magnetism" || visualizerMode !== "gauss-law") return;
        
        const rect = mainCanvas.getBoundingClientRect();
        const originX = mainCanvas.width / 2;
        const originY = mainCanvas.height / 2;
        
        emParams.gx = ((e.clientX - rect.left) - originX) / scaleFactor;
        emParams.gy = -(((e.clientY - rect.top) - originY) / scaleFactor);
        
        // Boundaries
        emParams.gx = Math.max(-5.0, Math.min(5.0, emParams.gx));
        emParams.gy = Math.max(-5.0, Math.min(5.0, emParams.gy));
        
        updateGaussFluxDisplay();
        drawGridAndVectors();
    });

    mainCanvas.addEventListener("mouseup", () => { isDraggingCharge = false; });
    mainCanvas.addEventListener("mouseleave", () => { isDraggingCharge = false; });

    // Window resize handler
    window.addEventListener("resize", () => {
        if (visualizerOpen) resizeCanvas();
    });
    
    // Switch to default course (Linear Algebra) initially
    switchCourse("linear-algebra");
});

// Helper for quick slider listeners
function setupSlider(id, callback) {
    const slider = document.getElementById("slider-" + id);
    const valueSpan = document.getElementById("val-" + id);
    
    slider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        if (valueSpan) valueSpan.textContent = val;
        callback(val);
    });
}

// --- 4. Chapter Page Loading Engine ---
function loadChapter(chapterId) {
    activeChapter = chapterId;
    const contentBody = document.getElementById("textbook-content");
    const headerTitle = document.getElementById("current-chapter-title");
    
    const data = currentCourse === "linear-algebra" ? chapterData[chapterId] : emChapterData[chapterId];
    if (data) {
        // Set content and title
        headerTitle.innerHTML = data.title;
        contentBody.innerHTML = data.html;
        
        // Scroll to top of textbook content
        contentBody.scrollTop = 0;
        
        // Render beautiful mathematical equations with KaTeX
        renderMathInElement(contentBody, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ],
            throwOnError: false
        });
    }
}

// Theme Toggler (Dark / Light)
function toggleTheme() {
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById("theme-toggle");
    
    if (currentTheme === "dark") {
        currentTheme = "light";
        htmlEl.setAttribute("data-theme", "light");
        themeBtn.innerHTML = `<i class="fa-solid fa-moon"></i> <span>Dark Mode</span>`;
    } else {
        currentTheme = "dark";
        htmlEl.setAttribute("data-theme", "dark");
        themeBtn.innerHTML = `<i class="fa-solid fa-sun"></i> <span>Light Mode</span>`;
    }
    
    // Re-draw coordinates with matching grid lines color
    drawGridAndVectors();
}

// --- 5. Interactive Solved Quizzes System ---
function toggleSolution(quizId) {
    const solutionDiv = document.getElementById("sol-" + quizId);
    const btn = document.querySelector(`#quiz-${quizId} .solution-btn`);
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

function checkQuiz(quizId, correctAnswer) {
    const inputVal = document.getElementById("ans-" + quizId).value.trim();
    const alertDiv = document.getElementById("alert-" + quizId);
    
    if (inputVal.toLowerCase() === correctAnswer.toLowerCase()) {
        alertDiv.className = "answer-alert success";
        alertDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> <b>Sahi Jawab!</b> Bilkul correct calculations hain.`;
    } else {
        alertDiv.className = "answer-alert error";
        alertDiv.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <b>Galat Jawab!</b> Ek baar calculations re-check karein ya neeche solution toggle karein.`;
    }
}

// --- 6. Coordinate Grid Rendering Engine ---
let canvas, ctx;
let scaleFactor = 30; // pixels per unit

function resizeCanvas() {
    canvas = document.getElementById("vector-canvas");
    ctx = canvas.getContext("2d");
    
    const container = canvas.parentElement;
    const size = Math.min(container.clientWidth, container.clientHeight, 350);
    
    canvas.width = size;
    canvas.height = size;
    
    scaleFactor = size / 12; // grid limits from -6 to +6
    drawGridAndVectors();
}

// Draw a single beautiful vector arrow on Canvas
function drawArrow(ctx, startX, startY, endX, endY, color, label, thickness = 2) {
    const headlen = 10; // length of head in pixels
    const dx = endX - startX;
    const dy = endY - startY;
    const angle = Math.atan2(dy, dx);
    
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = thickness;
    
    // Draw vector line
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    
    // Draw arrow head
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - headlen * Math.cos(angle - Math.PI / 6), endY - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(endX - headlen * Math.cos(angle + Math.PI / 6), endY - headlen * Math.sin(angle + Math.PI / 6));
    ctx.fill();
    
    // Draw label
    if (label) {
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.fillStyle = currentTheme === "dark" ? "#F3F4F6" : "#0F172A";
        
        // Position label slightly away from arrow head
        const labelX = endX + 12 * Math.cos(angle);
        const labelY = endY + 12 * Math.sin(angle);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(label, labelX, labelY);
    }
}

// Core drawing system
function drawGridAndVectors() {
    if (!canvas) return;
    
    const width = canvas.width;
    const height = canvas.height;
    const originX = width / 2;
    const originY = height / 2;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw Background Grid Lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = currentTheme === "dark" ? "#1E293B" : "#E2E8F0";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "9px monospace";
    
    const gridMax = 6;
    for (let i = -gridMax; i <= gridMax; i++) {
        if (i === 0) continue;
        
        // Vertical lines
        const x = originX + i * scaleFactor;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        
        // X-axis label
        ctx.fillStyle = currentTheme === "dark" ? "#64748B" : "#94A3B8";
        ctx.fillText(i, x, originY + 12);
        
        // Horizontal lines
        const y = originY - i * scaleFactor;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        
        // Y-axis label
        ctx.fillText(i, originX - 12, y);
    }
    
    // Draw Primary X and Y Coordinate Axes
    ctx.strokeStyle = currentTheme === "dark" ? "#475569" : "#64748B";
    ctx.lineWidth = 2;
    
    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();
    
    // Y Axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();
    
    // Origin Point
    ctx.fillStyle = currentTheme === "dark" ? "#475569" : "#64748B";
    ctx.beginPath();
    ctx.arc(originX, originY, 4, 0, 2 * Math.PI);
    ctx.fill();

    // Mode-specific graphics rendering
    if (visualizerMode === "addition") {
        // Draw u (Purple)
        const uPixelX = originX + vecU.x * scaleFactor;
        const uPixelY = originY - vecU.y * scaleFactor;
        drawArrow(ctx, originX, originY, uPixelX, uPixelY, "#A855F7", "u");
        
        // Draw v (Green)
        const vPixelX = originX + vecV.x * scaleFactor;
        const vPixelY = originY - vecV.y * scaleFactor;
        drawArrow(ctx, originX, originY, vPixelX, vPixelY, "#10B981", "v");
        
        // Draw dotted parallelogram projection lines
        const sumX = vecU.x + vecV.x;
        const sumY = vecU.y + vecV.y;
        const sumPixelX = originX + sumX * scaleFactor;
        const sumPixelY = originY - sumY * scaleFactor;
        
        ctx.strokeStyle = currentTheme === "dark" ? "#64748B" : "#94A3B8";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        
        // Dotted from u to sum
        ctx.beginPath();
        ctx.moveTo(uPixelX, uPixelY);
        ctx.lineTo(sumPixelX, sumPixelY);
        ctx.stroke();
        
        // Dotted from v to sum
        ctx.beginPath();
        ctx.moveTo(vPixelX, vPixelY);
        ctx.lineTo(sumPixelX, sumPixelY);
        ctx.stroke();
        ctx.setLineDash([]); // Reset
        
        // Draw sum vector u+v (Blue)
        drawArrow(ctx, originX, originY, sumPixelX, sumPixelY, "#3B82F6", "u+v", 3);
        
    } else if (visualizerMode === "combination") {
        // Draw scaled vectors
        const cuX = vecU.x * scalarC1;
        const cuY = vecU.y * scalarC1;
        const cuPixelX = originX + cuX * scaleFactor;
        const cuPixelY = originY - cuY * scaleFactor;
        
        const cvX = vecV.x * scalarC2;
        const cvY = vecV.y * scalarC2;
        const cvPixelX = originX + cvX * scaleFactor;
        const cvPixelY = originY - cvY * scaleFactor;
        
        // Draw original vectors as thin dotted arrows
        ctx.setLineDash([2, 2]);
        drawArrow(ctx, originX, originY, originX + vecU.x * scaleFactor, originY - vecU.y * scaleFactor, "rgba(168, 85, 247, 0.4)", "u", 1);
        drawArrow(ctx, originX, originY, originX + vecV.x * scaleFactor, originY - vecV.y * scaleFactor, "rgba(16, 185, 129, 0.4)", "v", 1);
        ctx.setLineDash([]);
        
        // Draw scaled arrows
        drawArrow(ctx, originX, originY, cuPixelX, cuPixelY, "#A855F7", "c₁u");
        drawArrow(ctx, originX, originY, cvPixelX, cvPixelY, "#10B981", "c₂v");
        
        // Linear Combination sum vector (Amber/Orange)
        const combX = cuX + cvX;
        const combY = cuY + cvY;
        const combPixelX = originX + combX * scaleFactor;
        const combPixelY = originY - combY * scaleFactor;
        
        // Dotted projections
        ctx.strokeStyle = currentTheme === "dark" ? "#64748B" : "#94A3B8";
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        
        ctx.beginPath();
        ctx.moveTo(cuPixelX, cuPixelY);
        ctx.lineTo(combPixelX, combPixelY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(cvPixelX, cvPixelY);
        ctx.lineTo(combPixelX, combPixelY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        drawArrow(ctx, originX, originY, combPixelX, combPixelY, "#F59E0B", "w", 3);
        
    } else if (visualizerMode === "transformation") {
        // Draw grid points transformed by Matrix T
        // We draw a grid square [-2, 2] x [-2, 2] and see how it transforms
        ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
        ctx.lineWidth = 1.5;
        
        // Define linear interpolation of transformation
        const tA = 1 + (matrixT.a - 1) * animProgress;
        const tB = matrixT.b * animProgress;
        const tC = matrixT.c * animProgress;
        const tD = 1 + (matrixT.d - 1) * animProgress;
        
        // Drawing Grid Lines
        for (let g = -3; g <= 3; g++) {
            // Horizontal lines before transformation: y = g
            // We transform points on the line: (x, g) -> (tA*x + tB*g, tC*x + tD*g)
            ctx.beginPath();
            for (let xCoord = -3; xCoord <= 3; xCoord += 0.2) {
                const transX = originX + (tA * xCoord + tB * g) * scaleFactor;
                const transY = originY - (tC * xCoord + tD * g) * scaleFactor;
                if (xCoord === -3) ctx.moveTo(transX, transY);
                else ctx.lineTo(transX, transY);
            }
            ctx.stroke();
            
            // Vertical lines: x = g
            ctx.beginPath();
            for (let yCoord = -3; yCoord <= 3; yCoord += 0.2) {
                const transX = originX + (tA * g + tB * yCoord) * scaleFactor;
                const transY = originY - (tC * g + tD * yCoord) * scaleFactor;
                if (yCoord === -3) ctx.moveTo(transX, transY);
                else ctx.lineTo(transX, transY);
            }
            ctx.stroke();
        }
        
        // Draw unit vectors transformed
        // Basis e1 transforms to [a, c]^T
        const transE1_X = originX + tA * scaleFactor;
        const transE1_Y = originY - tC * scaleFactor;
        drawArrow(ctx, originX, originY, transE1_X, transE1_Y, "#EF4444", "T(e₁)", 2.5);
        
        // Basis e2 transforms to [b, d]^T
        const transE2_X = originX + tB * scaleFactor;
        const transE2_Y = originY - tD * scaleFactor;
        drawArrow(ctx, originX, originY, transE2_X, transE2_Y, "#10B981", "T(e₂)", 2.5);
        
    } else if (visualizerMode === "eigenvalue") {
        // Search eigen vector for matrix EigenA = [1, 2; 2, 1]
        // Rotate input x at angle: eigenAngle
        const rad = (eigenAngle * Math.PI) / 180;
        const len = 2.0; // static magnitude for input x
        const x_Coord = len * Math.cos(rad);
        const y_Coord = len * Math.sin(rad);
        
        const xPixelX = originX + x_Coord * scaleFactor;
        const xPixelY = originY - y_Coord * scaleFactor;
        
        // Input vector x (Purple)
        drawArrow(ctx, originX, originY, xPixelX, xPixelY, "#A855F7", "x", 2.5);
        
        // Transformed vector Ax (Amber)
        // Ax = [1*x + 2*y, 2*x + 1*y]^T
        const Ax_Coord = 1 * x_Coord + 2 * y_Coord;
        const Ay_Coord = 2 * x_Coord + 1 * y_Coord;
        
        // We limit magnitude for drawing comfort
        const maxLen = 5.0;
        const curLen = Math.sqrt(Ax_Coord * Ax_Coord + Ay_Coord * Ay_Coord);
        let drawAx_X = Ax_Coord;
        let drawAx_Y = Ay_Coord;
        if (curLen > maxLen) {
            drawAx_X = (Ax_Coord / curLen) * maxLen;
            drawAx_Y = (Ay_Coord / curLen) * maxLen;
        }
        
        const axPixelX = originX + drawAx_X * scaleFactor;
        const axPixelY = originY - drawAx_Y * scaleFactor;
        drawArrow(ctx, originX, originY, axPixelX, axPixelY, "#F59E0B", "Ax", 3);
        
        // Check if vectors x and Ax are collinear (Eigenvector status)
        // Dot product / (norm(x)*norm(Ax)) = cos(theta_diff)
        const dot = x_Coord * Ax_Coord + y_Coord * Ay_Coord;
        const normX = Math.sqrt(x_Coord * x_Coord + y_Coord * y_Coord);
        const normAx = Math.sqrt(Ax_Coord * Ax_Coord + Ay_Coord * Ay_Coord);
        const cosDiff = Math.abs(dot / (normX * normAx)); // absolute for opposite direction too
        
        const statusBox = document.getElementById("eigen-status");
        if (cosDiff > 0.99) { // Angle diff almost 0 or 180 degrees
            // Check the scaling factor lambda = Ax / x
            let lambdaVal = Math.round((normAx / normX) * 10) / 10;
            if (dot < 0) lambdaVal = -lambdaVal; // negative eigenvalue
            
            statusBox.style.background = "var(--success-glow)";
            statusBox.style.color = "var(--success)";
            statusBox.style.borderColor = "rgba(16, 185, 129, 0.3)";
            statusBox.innerHTML = `<i class="fa-solid fa-trophy"></i> <b>EIGENVECTOR FOUND!</b> Corresponding eigenvalue $\\lambda = ${lambdaVal}$.`;
            
            // Draw a glowing golden aura around origin for wow factor
            ctx.strokeStyle = "rgba(245, 158, 11, 0.4)";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(originX, originY, normX * scaleFactor, 0, 2 * Math.PI);
            ctx.stroke();
        } else {
            statusBox.style.background = "var(--primary-glow)";
            statusBox.style.color = "var(--primary)";
            statusBox.style.borderColor = "rgba(59, 130, 246, 0.2)";
            statusBox.innerHTML = `Searching... vectors are not parallel yet.`;
        }
    } else if (visualizerMode === "field-lines") {
        drawEMFieldLines(ctx, originX, originY, scaleFactor);
    } else if (visualizerMode === "gauss-law") {
        drawEMGaussLaw(ctx, originX, originY, scaleFactor);
    } else if (visualizerMode === "lorentz-force") {
        drawEMLorentzForce(ctx, originX, originY, scaleFactor);
    } else if (visualizerMode === "biot-savart") {
        drawEMBiotSavart(ctx, originX, originY, scaleFactor);
    } else if (visualizerMode === "solenoid") {
        drawEMSolenoid(ctx, originX, originY, scaleFactor);
    }
}

// Animate matrix transformation transition
function animateMatrixTransformation() {
    animProgress = 0;
    if (animInterval) clearInterval(animInterval);
    
    animInterval = setInterval(() => {
        animProgress += 0.04;
        if (animProgress >= 1) {
            animProgress = 1;
            clearInterval(animInterval);
        }
        drawGridAndVectors();
    }, 20);
}

// --- E&M Display Update Helpers ---
function updateGaussFluxDisplay() {
    const d = Math.sqrt(emParams.gx * emParams.gx + emParams.gy * emParams.gy);
    if (d <= emParams.gradius) {
        emParams.gcharge_enc = emParams.gcharge;
    } else {
        emParams.gcharge_enc = 0;
    }
    
    const qEncEl = document.getElementById("gauss-enc-q");
    const fluxEl = document.getElementById("gauss-flux-val");
    if (qEncEl) qEncEl.textContent = emParams.gcharge_enc;
    if (fluxEl) {
        const flux = (emParams.gcharge_enc * 1000 / 8.854).toFixed(1);
        fluxEl.textContent = flux;
    }
}

function updateLorentzRadiusDisplay() {
    const q = Math.abs(emParams.lcharge);
    const m = emParams.lmass;
    const v = emParams.lvel;
    const B = emParams.lmag;
    const radiusEl = document.getElementById("lorentz-radius-val");
    if (radiusEl) {
        if (q === 0 || B === 0) {
            radiusEl.textContent = "∞";
        } else {
            const r = (m * v) / (q * B);
            radiusEl.textContent = r.toFixed(2);
        }
    }
}

function updateBiotFieldDisplay() {
    const I = emParams.bcurrent;
    const r = emParams.bdist;
    const fieldEl = document.getElementById("biot-field-val");
    if (fieldEl) {
        if (r === 0) {
            fieldEl.textContent = "∞";
        } else {
            const B = 0.2 * I / r;
            fieldEl.textContent = B.toFixed(2);
        }
    }
}

function updateSolenoidFieldDisplay() {
    const I = emParams.scurrent;
    const n = emParams.sdensity;
    const ur = emParams.score;
    const fieldEl = document.getElementById("solenoid-field-val");
    if (fieldEl) {
        const B = 4 * Math.PI * 1e-2 * ur * n * I;
        fieldEl.textContent = B.toFixed(2);
    }
}

// --- E&M Canvas Drawing Functions ---
function drawEMFieldLines(ctx, originX, originY, scaleFactor) {
    const config = emParams.chargeConfig;
    const qmag = emParams.qmag;
    const d = emParams.qdist;
    
    let charges = [];
    if (config === "single-pos") {
        charges.push({ x: 0, y: 0, q: qmag });
    } else if (config === "single-neg") {
        charges.push({ x: 0, y: 0, q: -qmag });
    } else if (config === "dipole") {
        charges.push({ x: -d/2, y: 0, q: qmag });
        charges.push({ x: d/2, y: 0, q: -qmag });
    }
    
    ctx.lineWidth = 1.5;
    const numLines = 16;
    
    charges.forEach(source => {
        if (source.q > 0) {
            for (let i = 0; i < numLines; i++) {
                const angle = (i * 2 * Math.PI) / numLines;
                let px = source.x + 0.15 * Math.cos(angle);
                let py = source.y + 0.15 * Math.sin(angle);
                
                let points = [{ x: px, y: py }];
                let steps = 0;
                
                while (steps < 120) {
                    let Ex = 0;
                    let Ey = 0;
                    charges.forEach(c => {
                        const dx = px - c.x;
                        const dy = py - c.y;
                        const r2 = dx*dx + dy*dy;
                        const r = Math.sqrt(r2);
                        if (r > 0.05) {
                            Ex += c.q * dx / (r2 * r);
                            Ey += c.q * dy / (r2 * r);
                        }
                    });
                    
                    const Emag = Math.sqrt(Ex*Ex + Ey*Ey);
                    if (Emag < 0.01) break;
                    
                    const stepSize = 0.12;
                    px += (Ex / Emag) * stepSize;
                    py += (Ey / Emag) * stepSize;
                    
                    points.push({ x: px, y: py });
                    
                    if (Math.abs(px) > 6 || Math.abs(py) > 6) break;
                    
                    let closeToNeg = false;
                    charges.forEach(c => {
                        if (c.q < 0) {
                            const dist = Math.sqrt((px - c.x)*(px - c.x) + (py - c.y)*(py - c.y));
                            if (dist < 0.2) {
                                closeToNeg = true;
                            }
                        }
                    });
                    if (closeToNeg) break;
                    
                    steps++;
                }
                
                ctx.strokeStyle = currentTheme === "dark" ? "rgba(59, 130, 246, 0.6)" : "rgba(37, 99, 235, 0.6)";
                ctx.beginPath();
                ctx.moveTo(originX + points[0].x * scaleFactor, originY - points[0].y * scaleFactor);
                for (let k = 1; k < points.length; k++) {
                    ctx.lineTo(originX + points[k].x * scaleFactor, originY - points[k].y * scaleFactor);
                }
                ctx.stroke();
                
                if (points.length > 5) {
                    const midIndex = Math.floor(points.length / 2);
                    const pMid = points[midIndex];
                    const pNext = points[midIndex + 1];
                    const midAngle = Math.atan2(pNext.y - pMid.y, pNext.x - pMid.x);
                    
                    ctx.save();
                    ctx.translate(originX + pMid.x * scaleFactor, originY - pMid.y * scaleFactor);
                    ctx.rotate(-midAngle);
                    ctx.fillStyle = currentTheme === "dark" ? "#60A5FA" : "#1D4ED8";
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(-8, -4);
                    ctx.lineTo(-6, 0);
                    ctx.lineTo(-8, 4);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }
        } else if (config === "single-neg") {
            for (let i = 0; i < numLines; i++) {
                const angle = (i * 2 * Math.PI) / numLines;
                ctx.strokeStyle = currentTheme === "dark" ? "rgba(20, 184, 166, 0.6)" : "rgba(13, 148, 136, 0.6)";
                ctx.beginPath();
                ctx.moveTo(originX + 5 * Math.cos(angle) * scaleFactor, originY - 5 * Math.sin(angle) * scaleFactor);
                ctx.lineTo(originX + 0.25 * Math.cos(angle) * scaleFactor, originY - 0.25 * Math.sin(angle) * scaleFactor);
                ctx.stroke();
                
                const midX = 2.5 * Math.cos(angle);
                const midY = 2.5 * Math.sin(angle);
                ctx.save();
                ctx.translate(originX + midX * scaleFactor, originY - midY * scaleFactor);
                ctx.rotate(-angle + Math.PI);
                ctx.fillStyle = currentTheme === "dark" ? "#2DD4BF" : "#0F766E";
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-8, -4);
                ctx.lineTo(-6, 0);
                ctx.lineTo(-8, 4);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }
    });
    
    charges.forEach(c => {
        const cx = originX + c.x * scaleFactor;
        const cy = originY - c.y * scaleFactor;
        
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, 2 * Math.PI);
        
        if (c.q > 0) {
            ctx.fillStyle = "#EF4444";
            ctx.shadowColor = "rgba(239, 68, 68, 0.5)";
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "bold 16px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("+", cx, cy);
        } else {
            ctx.fillStyle = "#10B981";
            ctx.shadowColor = "rgba(16, 185, 129, 0.5)";
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            ctx.fillStyle = "#FFFFFF";
            ctx.font = "bold 16px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("-", cx, cy);
        }
    });
}

function drawEMGaussLaw(ctx, originX, originY, scaleFactor) {
    const radius = emParams.gradius;
    const qVal = emParams.gcharge;
    const cx = emParams.gx;
    const cy = emParams.gy;
    
    const chargePixelX = originX + cx * scaleFactor;
    const chargePixelY = originY - cy * scaleFactor;
    const gaussRadiusPixels = radius * scaleFactor;
    
    ctx.save();
    ctx.strokeStyle = currentTheme === "dark" ? "#F59E0B" : "#D97706";
    ctx.lineWidth = 2.5;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.arc(originX, originY, gaussRadiusPixels, 0, 2 * Math.PI);
    ctx.stroke();
    
    ctx.fillStyle = currentTheme === "dark" ? "rgba(245, 158, 11, 0.03)" : "rgba(245, 158, 11, 0.05)";
    ctx.fill();
    ctx.restore();
    
    ctx.fillStyle = currentTheme === "dark" ? "#F59E0B" : "#D97706";
    ctx.font = "bold 10px monospace";
    ctx.fillText("GAUSSIAN SURFACE (r = " + radius.toFixed(1) + "m)", originX, originY - gaussRadiusPixels - 8);
    
    const numLines = 12;
    
    ctx.lineWidth = 1.2;
    ctx.strokeStyle = qVal > 0 
        ? (currentTheme === "dark" ? "rgba(239, 68, 68, 0.4)" : "rgba(239, 68, 68, 0.5)") 
        : (currentTheme === "dark" ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.5)");
        
    for (let i = 0; i < numLines; i++) {
        const angle = (i * 2 * Math.PI) / numLines;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        
        const endX = cx + 8 * dx;
        const endY = cy + 8 * dy;
        
        ctx.beginPath();
        ctx.moveTo(chargePixelX, chargePixelY);
        ctx.lineTo(originX + endX * scaleFactor, originY - endY * scaleFactor);
        ctx.stroke();
        
        const aCoeff = 1;
        const bCoeff = 2 * (cx * dx + cy * dy);
        const cCoeff = cx*cx + cy*cy - radius*radius;
        
        const disc = bCoeff*bCoeff - 4*aCoeff*cCoeff;
        if (disc >= 0) {
            const t1 = (-bCoeff + Math.sqrt(disc)) / 2;
            const t2 = (-bCoeff - Math.sqrt(disc)) / 2;
            
            [t1, t2].forEach(t => {
                if (t > 0 && t < 8) {
                    const ix = cx + t * dx;
                    const iy = cy + t * dy;
                    const ipx = originX + ix * scaleFactor;
                    const ipy = originY - iy * scaleFactor;
                    
                    ctx.save();
                    ctx.translate(ipx, ipy);
                    
                    const fieldAngle = Math.atan2(dy * qVal, dx * qVal);
                    ctx.rotate(-fieldAngle);
                    
                    ctx.fillStyle = "#F59E0B";
                    ctx.beginPath();
                    ctx.arc(0, 0, 4, 0, 2*Math.PI);
                    ctx.fill();
                    
                    ctx.beginPath();
                    ctx.moveTo(4, 0);
                    ctx.lineTo(-4, -4);
                    ctx.lineTo(-2, 0);
                    ctx.lineTo(-4, 4);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            });
        }
    }
    
    ctx.beginPath();
    ctx.arc(chargePixelX, chargePixelY, 12, 0, 2 * Math.PI);
    
    if (qVal !== 0) {
        ctx.fillStyle = qVal > 0 ? "#EF4444" : "#10B981";
        ctx.shadowColor = qVal > 0 ? "rgba(239, 68, 68, 0.6)" : "rgba(16, 185, 129, 0.6)";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(qVal > 0 ? "+" : "-", chargePixelX, chargePixelY);
    } else {
        ctx.fillStyle = "#94A3B8";
        ctx.fill();
    }
    
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(chargePixelX, chargePixelY, 18, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawEMLorentzForce(ctx, originX, originY, scaleFactor) {
    const q = emParams.lcharge;
    const v = emParams.lvel;
    const B = emParams.lmag;
    const m = emParams.lmass;
    const t = emParams.lorentzAnimTime;
    
    ctx.strokeStyle = currentTheme === "dark" ? "rgba(59, 130, 246, 0.15)" : "rgba(37, 99, 235, 0.15)";
    ctx.lineWidth = 1;
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    const fieldSpacing = 40;
    for (let x = fieldSpacing/2; x < canvas.width; x += fieldSpacing) {
        for (let y = fieldSpacing/2; y < canvas.height; y += fieldSpacing) {
            ctx.fillStyle = currentTheme === "dark" ? "#1E293B" : "#CBD5E1";
            ctx.fillText("×", x, y);
        }
    }
    
    ctx.fillStyle = currentTheme === "dark" ? "#60A5FA" : "#2563EB";
    ctx.font = "bold 9px monospace";
    ctx.fillText("UNIFORM MAGNETIC FIELD B (INTO PAGE)", canvas.width/2, 15);
    
    if (q === 0) {
        const px = -5 + (v * t) % 10;
        
        ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(originX - 5 * scaleFactor, originY);
        ctx.lineTo(originX + 5 * scaleFactor, originY);
        ctx.stroke();
        ctx.setLineDash([]);
        
        const pPixelX = originX + px * scaleFactor;
        const pPixelY = originY;
        ctx.beginPath();
        ctx.arc(pPixelX, pPixelY, 8, 0, 2*Math.PI);
        ctx.fillStyle = "#64748B";
        ctx.fill();
        
        drawArrow(ctx, pPixelX, pPixelY, pPixelX + 1.5 * scaleFactor, pPixelY, "#A855F7", "v", 1.5);
        return;
    }
    
    const r = (m * v) / (Math.abs(q) * B);
    const rPixels = r * scaleFactor;
    
    const centerY = q > 0 ? r : -r;
    const centerPixelX = originX;
    const centerPixelY = originY - centerY * scaleFactor;
    
    ctx.strokeStyle = currentTheme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(15, 23, 42, 0.1)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(centerPixelX, centerPixelY, rPixels, 0, 2*Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);
    
    const omega = (q * B) / m;
    const angle = omega * t;
    
    let px, py;
    let vx_dir, vy_dir;
    
    if (q > 0) {
        px = r * Math.sin(angle);
        py = r - r * Math.cos(angle);
        vx_dir = Math.cos(angle);
        vy_dir = Math.sin(angle);
    } else {
        const absAngle = Math.abs(omega) * t;
        px = r * Math.sin(absAngle);
        py = -r + r * Math.cos(absAngle);
        vx_dir = Math.cos(absAngle);
        vy_dir = -Math.sin(absAngle);
    }
    
    const pPixelX = originX + px * scaleFactor;
    const pPixelY = originY - py * scaleFactor;
    
    ctx.beginPath();
    ctx.arc(pPixelX, pPixelY, 8, 0, 2*Math.PI);
    ctx.fillStyle = q > 0 ? "#EF4444" : "#10B981";
    ctx.shadowColor = q > 0 ? "rgba(239, 68, 68, 0.5)" : "rgba(16, 185, 129, 0.5)";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;
    
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 10px Inter, sans-serif";
    ctx.fillText(q > 0 ? "+" : "-", pPixelX, pPixelY);
    
    const velLen = 1.2;
    const endV_X = pPixelX + vx_dir * velLen * scaleFactor;
    const endV_Y = pPixelY - vy_dir * velLen * scaleFactor;
    drawArrow(ctx, pPixelX, pPixelY, endV_X, endV_Y, "#A855F7", "v", 2);
    
    const fx_dir = -px / r;
    const fy_dir = (centerY - py) / r;
    const endF_X = pPixelX + fx_dir * velLen * scaleFactor;
    const endF_Y = pPixelY - fy_dir * velLen * scaleFactor;
    drawArrow(ctx, pPixelX, pPixelY, endF_X, endF_Y, "#F59E0B", "F_mag", 2);
}

function drawEMBiotSavart(ctx, originX, originY, scaleFactor) {
    const I = emParams.bcurrent;
    const r = emParams.bdist;
    
    ctx.lineWidth = 1.2;
    const numLoops = 4;
    for (let i = 1; i <= numLoops; i++) {
        const radius = i * 1.1; 
        const rx = radius * scaleFactor;
        const ry = radius * 0.35 * scaleFactor;
        
        ctx.strokeStyle = currentTheme === "dark" 
            ? "rgba(16, 185, 129, " + (0.7 - i * 0.12) + ")" 
            : "rgba(13, 148, 136, " + (0.7 - i * 0.12) + ")";
            
        ctx.beginPath();
        ctx.ellipse(originX, originY, rx, ry, 0, 0, 2*Math.PI);
        ctx.stroke();
        
        ctx.save();
        ctx.translate(originX, originY + ry);
        ctx.fillStyle = currentTheme === "dark" ? "#10B981" : "#0D9488";
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-6, -3);
        ctx.lineTo(-4, 0);
        ctx.lineTo(-6, 3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
    
    ctx.save();
    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, canvas.height);
    ctx.stroke();
    
    ctx.strokeStyle = "#FFFbeb";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, canvas.height);
    ctx.stroke();
    ctx.restore();
    
    ctx.fillStyle = "#F59E0B";
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillText("I = " + I + " A", originX + 22, 30);
    
    const speed = 0.05;
    const timeShift = (Date.now() * speed) % 40;
    ctx.fillStyle = "#FFF";
    for (let y = timeShift; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.arc(originX, canvas.height - y, 3, 0, 2*Math.PI);
        ctx.fill();
    }
    
    drawArrow(ctx, originX, 110, originX, 50, "#FFFbeb", "", 2);
    
    const px = originX + r * scaleFactor;
    const py = originY;
    
    ctx.fillStyle = "#EF4444";
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, 2*Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = "rgba(239, 68, 68, 0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(px, py, 12, 0, 2*Math.PI);
    ctx.stroke();
    
    ctx.fillText("P", px + 12, py - 12);
    
    ctx.save();
    ctx.translate(px, py + 25);
    ctx.strokeStyle = "#10B981";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(-6, -6);
    ctx.lineTo(6, 6);
    ctx.moveTo(6, -6);
    ctx.lineTo(-6, 6);
    ctx.stroke();
    ctx.restore();
    
    ctx.fillStyle = "#10B981";
    ctx.font = "bold 10px monospace";
    ctx.fillText("B-Vector (Into Page)", px, py + 48);
}

function drawEMSolenoid(ctx, originX, originY, scaleFactor) {
    const I = emParams.scurrent;
    const n = emParams.sdensity;
    const ur = emParams.score;
    
    const solWidth = 5.0 * scaleFactor;
    const solHeight = 1.6 * scaleFactor;
    
    const startX = originX - solWidth/2;
    const endX = originX + solWidth/2;
    const topY = originY - solHeight/2;
    const bottomY = originY + solHeight/2;
    
    if (ur > 1) {
        ctx.save();
        let coreColor = "rgba(100, 116, 139, 0.4)";
        if (ur > 100) coreColor = "rgba(148, 163, 184, 0.75)";
        else if (ur > 40) coreColor = "rgba(71, 85, 105, 0.6)";
        
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.roundRect(startX - 10, topY + 5, solWidth + 20, solHeight - 10, 8);
        ctx.fill();
        
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
        
        ctx.fillStyle = currentTheme === "dark" ? "#94A3B8" : "#475569";
        ctx.font = "bold 9px monospace";
        let matName = "COBALT";
        if (ur > 100) matName = "IRON CORE";
        else if (ur > 40) matName = "NICKEL CORE";
        ctx.fillText(matName + " (μ_r = " + ur + ")", originX, originY);
    }
    
    ctx.save();
    const B_val = 4 * Math.PI * 1e-2 * ur * n * I;
    const bOpacity = Math.min(1.0, 0.2 + B_val / 20);
    ctx.strokeStyle = `rgba(16, 185, 129, ${bOpacity})`;
    ctx.lineWidth = Math.min(4, 1.2 + B_val / 10);
    
    const numFLines = 5;
    for (let i = 0; i < numFLines; i++) {
        const yCoord = topY + 15 + i * (solHeight - 30) / (numFLines - 1);
        
        ctx.beginPath();
        ctx.moveTo(startX - 30, yCoord);
        ctx.lineTo(endX + 30, yCoord);
        ctx.stroke();
        
        drawArrow(ctx, endX + 10, yCoord, endX + 25, yCoord, `rgba(16, 185, 129, ${bOpacity})`, "", ctx.lineWidth);
    }
    ctx.restore();
    
    const turns = Math.floor(n * 0.7);
    const coilSpacing = solWidth / (turns - 1);
    
    ctx.lineWidth = 1.5;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    for (let i = 0; i < turns; i++) {
        const cx = startX + i * coilSpacing;
        
        ctx.save();
        ctx.fillStyle = "#EF4444";
        ctx.beginPath();
        ctx.arc(cx, topY, 8, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
        
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(cx, topY, 2, 0, 2*Math.PI);
        ctx.fill();
        ctx.restore();
        
        ctx.save();
        ctx.fillStyle = "#EF4444";
        ctx.beginPath();
        ctx.arc(cx, bottomY, 8, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
        
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - 3, bottomY - 3);
        ctx.lineTo(cx + 3, bottomY + 3);
        ctx.moveTo(cx + 3, bottomY - 3);
        ctx.lineTo(cx - 3, bottomY + 3);
        ctx.stroke();
        ctx.restore();
        
        ctx.strokeStyle = currentTheme === "dark" ? "rgba(245, 158, 11, 0.25)" : "rgba(217, 119, 6, 0.25)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(cx, originY, coilSpacing/2, solHeight/2, 0, -Math.PI/2, Math.PI/2);
        ctx.stroke();
    }
    
    ctx.strokeStyle = currentTheme === "dark" ? "#475569" : "#64748B";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(startX, topY - 10, solWidth, solHeight + 20, 4);
    ctx.stroke();
}


// Mobile Sidebar Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');

if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}
