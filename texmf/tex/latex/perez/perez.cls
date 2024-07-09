\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{perez}[2023/02/09 v1.0 Perez class]

\DeclareOption{10pt}{%
	\PassOptionsToClass{\CurrentOption}{book}
}
\DeclareOption{12pt}{%
    \PassOptionsToClass{\CurrentOption}{book}
}

\DeclareOption*{%
	\ClassError{phys}{Unknown option '\CurrentOption'}
}

%\ExecuteOptions{12pt}

\ProcessOptions\relax

\LoadClass[a4paper]{book}

\RequirePackage[left=2.5cm,right=2.5cm,top=2cm]{geometry}
\RequirePackage[utf8]{inputenc}
\RequirePackage{arabtex}
%\RequirePackage[LAE]{fontenc}
\RequirePackage{graphicx}
\RequirePackage[svgnames]{xcolor}
\RequirePackage[export]{adjustbox}
\RequirePackage{amsmath}
\RequirePackage{mathtools}
\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage{stmaryrd}
\RequirePackage{float}
\RequirePackage{fourier}
\RequirePackage[framemethod=tikz]{mdframed}
\usepackage{fontawesome5}
\RequirePackage{tikz}
\usetikzlibrary{arrows.meta,shapes.geometric,patterns,decorations.pathmorphing,
    decorations.markings,matrix,positioning,calc,3d}
\RequirePackage[most]{tcolorbox}
\RequirePackage{pifont}
\RequirePackage{latexcolors}
\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\RequirePackage{csquotes}
\RequirePackage{esvect}
\RequirePackage[version=4]{mhchem}

% Units
\RequirePackage{siunitx}
\sisetup{%
    inter-unit-product = \ensuremath { { } \cdot { } },
    output-decimal-marker = {,},
    % per-mode = symbol, % symbol, fraction
    print-unity-mantissa=false,
}
\DeclareSIUnit\turn{\text{tr}}
\DeclareSIUnit\M{\mole\per\liter}



\graphicspath{ {./images/} }
\setlength\parindent{0pt}


\renewcommand\thesection{\Roman{section}.--}
\renewcommand\thesubsection{\Roman{section}.\arabic{subsection}.--}
\renewcommand\thesubsubsection{\alph{subsubsection})}

\setcounter{secnumdepth}{3}

% vector

% tikz setup
\tikzset{%
    dim/.tip={Stealth[sep].Bar[width=2mm]},
    >=Stealth,
}

% axes
\def\caraxes(#1=#2,#3=#4){%
    \draw[-Latex] (0,0) -- +(#2,0) node[right] {$#1$};%
    \draw[-Latex] (0,0) -- +(0,#4) node[above] {$#3$};%
}

% Referentiels
\newcommand\Ra{\mathcal{R}}
\newcommand\Rr{\mathcal{R}^{\prime}}
\newcommand\RT{\mathcal{R}}
\newcommand\RG{\mathcal{R}_{g}}
\newcommand\RC{\mathcal{R}_{0}}

\newcommand\ex{\vec{e}_{x}}
\newcommand\ey{\vec{e}_{y}}
\newcommand\ez{\vec{e}_{z}}
\newcommand\er{\vec{e}_{r}}
\newcommand\erho{\vec{e}_{\rho}}
\newcommand\evphi{\vec{e}_{\varphi}}
\newcommand\etheta{\vec{e}_{\theta}}
\newcommand\et{\vec{e}_{t}}
\newcommand\en{\vec{e}_{n}}
\newcommand\eb{\vec{e}_{b}}

\newcommand{\OA}{\vv{OA}}
\newcommand{\AB}{\vv{AB}}

\NewDocumentCommand{\vA}{ O{A} O{\Ra} }{\vec{v}_{#1 / #2}}
\newcommand{\vB}[1][\Ra]{\vec{v}_{B / #1}}
\newcommand{\aA}[1][\Ra]{\vec{a}_{A / #1}}
\newcommand\at{\vec{a}_{t}}
\newcommand\an{\vec{a}_{n}}

\NewDocumentCommand{\Om}{ O{} }{\vec{\Omega}_{#1}}

\newcommand{\Cte}{\mathrm{Cte}}

\newcommand{\total}{\mathrm{d}}
\NewDocumentCommand{\dfdt}{ m o }{
    \IfNoValueTF{#2}
    {\frac{\mathrm{d} #1}{\mathrm{d} t}}
    {\left(\frac{\mathrm{d} #1}{\mathrm{d} t}\right)_{#2}}
}
\NewDocumentCommand{\ddfdt}{ m }{\frac{\mathrm{d}^{2} #1}{\mathrm{d} t^{2}}}

\NewDocumentCommand{\Lo}{ O{O} }{\vv{L}_{#1}}
\NewDocumentCommand{\Mo}{ O{O} }{\vv{M}_{#1}}

\NewDocumentCommand{\dV}{}{\mathrm{d}\mathcal{V}}
\NewDocumentCommand{\dQ}{}{\mathrm{d}Q}


% Box
\NewDocumentCommand{\mathbox}{ m }%
    {\tcboxmath[colback=lightgray,boxrule=0pt,sharp corners]{#1}}

\NewDocumentEnvironment{eqvars}{ O{121} }
    {%
        \begin{itemize}%
        \renewcommand{\labelitemi}{\ding{#1}}%
        \renewcommand{\labelitemii}{\ding{#1}}%
        \renewcommand{\labelitemiii}{\ding{#1}}%
    }
    {\end{itemize}}

% Definition
\definecolor{background}{HTML}{f5f3f4}
\newmdenv[%
    skipabove = \baselineskip,
    skipbelow = 0pt,
    innerleftmargin = 10pt,
    innerrightmargin = 10pt,
    innertopmargin = 10pt,
    innerbottommargin = 5pt,
    hidealllines = true,
    leftline = true,
    linewidth = 2pt,
    frametitleaboveskip=5pt,
    frametitlebelowskip = 5pt,%
    frametitlefont={\normalfont\large\bfseries},
    backgroundcolor=background,
    singleextra={
        \draw[gray]
            ($(O |- P)+(10pt,-\mdfframetitleboxtotalheight)$) --
            ($(P)+(0,-\mdfframetitleboxtotalheight)$);
    },
    nobreak,
]{llboxenv}

\NewDocumentEnvironment{definitions}{}%
{%
    \newcounter{exercice}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Définitions}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faHashtag}
        \NewDocumentCommand{\df}{}{\item}
        \begin{itemize}
    }%
    {%
        \end{itemize}
    \end{llboxenv}%
}

\NewDocumentEnvironment{notes}{}%
{%
    \definecolor{primarycolor}{HTML}{5f0f40}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Remarques}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faIcon{pencil-alt}}
        \NewDocumentCommand{\note}{}{\item}
        \begin{itemize}
        }%
        {%
        \end{itemize}
    \end{llboxenv}%
}

\NewDocumentEnvironment{enonce}{}%
{%
    \definecolor{primarycolor}{HTML}{e09f3e}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Énoncé}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        }%
        {%
    \end{llboxenv}%
}

\NewDocumentEnvironment{books}{}%
{%
    \definecolor{primarycolor}{HTML}{03045e}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Livres}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faBook}
        \NewDocumentCommand{\book}{}{\item}
        \begin{itemize}
    }%
    {%
        \end{itemize}
    \end{llboxenv}%
}

\NewDocumentEnvironment{dictionnaire}{}%
{%
    \definecolor{primarycolor}{HTML}{6f1d1b}
    %\DeclareDocumentCommand{\FA}{mm}{\item #1\dotfill\RL{#2}}%
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Dictionnaire}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faLanguage}%
        \DeclareDocumentCommand{\mot}{}{\item}%
        \begin{itemize}
        }%
        {%
        \end{itemize}
    \end{llboxenv}%
}

\NewDocumentEnvironment{historique}{}%
{%
    \definecolor{primarycolor}{HTML}{8a817c}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Historique}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faMapSigns}
        \begin{itemize}
        }%
        {%
        \end{itemize}
    \end{llboxenv}%
}

\NewDocumentEnvironment{exemples}{}%
{%
    \definecolor{primarycolor}{HTML}{ff6700}
    \begin{llboxenv}[linecolor=primarycolor,frametitle={Exemples}]%
        \colorlet{thislc}{primarycolor}%
        \colorlet{thisbg}{background}%
        \renewcommand{\labelenumi}{\bfseries\color{thislc}\arabic{enumi})}%
        \renewcommand{\labelitemi}{\color{thislc}\faMapSigns} % a changer
        \begin{itemize}
        }%
        {%
        \end{itemize}
    \end{llboxenv}%
}

\endinput
