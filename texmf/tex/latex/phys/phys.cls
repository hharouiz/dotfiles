\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{phys}[2022/10/12 v1.0 phys class]

\DeclareOption{10pt}{%
	\PassOptionsToClass{\CurrentOption}{article}
}
\DeclareOption{12pt}{%
    \PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption*{%
	\ClassError{phys}{Unknown option '\CurrentOption'}
}

% If TD
\newif\if@td\@tdfalse
\DeclareOption{td}{
    \@tdtrue
}

% If Cours
\newif\if@cours\@coursfalse
\DeclareOption{cours}{
    \@courstrue
}

% If TP
\newif\if@mytp\@mytpfalse
\DeclareOption{mytp}{
    \@mytptrue
}

\newif\if@tp\@tpfalse
\DeclareOption{tp}{
    \@tptrue
}

% If DS
\newif\if@ds\@dsfalse
\DeclareOption{ds}{
    \@dstrue
}

% If Problem
\newif\if@mypb\@mypbfalse
\DeclareOption{mypb}{
    \@mypbtrue
}

% If DIAS
\newif\if@dias\@diasfalse
\DeclareOption{dias}{
    \@diastrue
}

%\ExecuteOptions{12pt}

\ProcessOptions\relax

\LoadClass[a4paper]{article}

\usepackage[left=2cm,right=2cm,top=2cm,bottom=3cm]{geometry}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage[dvipsnames,svgnames]{xcolor}
\usepackage[export]{adjustbox}
\usepackage{amsmath}
\usepackage{mathtools}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage[version=4]{mhchem}
\usepackage{stmaryrd}
\usepackage{float}
\usepackage{esvect}
\usepackage{LBox}
%\usepackage{fourier}
\usepackage{tikz}
\usetikzlibrary{arrows.meta,shapes.geometric,patterns,decorations.pathmorphing,
    decorations.markings,matrix,positioning,calc,intersections,fit,
    decorations.text,3d,decorations.pathreplacing,decorations.shapes,
    backgrounds,shapes.arrows}
\usepackage[most]{tcolorbox}
\usepackage{pifont}
\usepackage{latexcolors}
\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\ctikzset{%
    % voltage/european label distance=0.5
    % Colors
    amplifiers/fill=arylideyellow,
    capacitors/fill=ashgrey,
}
\usepackage{siunitx}
\sisetup{%
    inter-unit-product = \ensuremath { { } \cdot { } },
    output-decimal-marker = {,},
    % per-mode = symbol, % symbol, fraction
    print-unity-mantissa=false,
}
\DeclareSIUnit[]{\M}{\mole\per\liter}
\usepackage{fontawesome5}
\usepackage{csquotes}
\usepackage{chemfig}
\setchemfig{fixed length=true}

%  typeset words in Arabic
\usepackage{arabtex}

\usepackage[explicit]{titlesec}

\RequirePackage{booktabs}

\graphicspath{ {./images/} }
\setlength\parindent{0pt}

% Define colors
\definecolor{primarycolor}{HTML}{03045e}
\definecolor{secondarycolor}{HTML}{caf0f8}

%\renewcommand\labelenumi{\bfseries\arabic{enumi})}
%\renewcommand\labelenumii{\bfseries\alph{enumii})}

%\tikzset{enumistyle/.style={%
%        rectangle,fill=capri,text=white,font=\bfseries,inner sep=2pt}}
%\renewcommand\labelenumi{%
%    \tikz[baseline=(X.base)]%
%    \node[enumistyle] (X) {\theenumi};%
%}
%\renewcommand\labelitemi{\color{capri}\scriptsize\faCircleO}
%\renewcommand\labelitemii{\color{capri}\scriptsize\faChevronRight}

% caption
\RequirePackage{caption}
%\DeclareCaptionLabelSeparator{period-newline}{.\newline} % define your own sep
\DeclareCaptionLabelFormat{simple}{#1~#2}
\captionsetup{
	textfont={rm,it},labelfont={sc,bf},labelsep=quad,
	aboveskip=3mm,singlelinecheck=true,justification=raggedright,
	format=hang,margin=20pt,
	figurename=Fig.,}
	
% varioref
\labelformat{equation}{(#1)}
\labelformat{figure}{#1}

\if@td
    \definecolor{primarycolor}{HTML}{03045e}
    \definecolor{secondarycolor}{HTML}{caf0f8}

	% Old style
    \renewcommand\thesection{Execice~\arabic{section}~:}
    \renewcommand\thesubsection{\Alph{subsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \newcounter{exercice}
    \stepcounter{exercice}%
    \include{exercise-styles.tex}
    \newmdenv[style=ExerciceStyle3]{exercice}

    \NewDocumentEnvironment{Ex}{O{} m}%
    {%
        \begin{exercice}[frametitle={Exercice~\theexercice~: #2}, #1]%
            \colorlet{thislc}{primarycolor}%
            \colorlet{thisbg}{background}%
        }%
        {%
        \end{exercice}%
    }
\fi

\if@cours
    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\arabic{subsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
\fi

\if@mytp
    \definecolor{primarycolor}{HTML}{2b2d42}
    \definecolor{secondarycolor}{HTML}{edf2f4}

    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\arabic{subsection}}
    \renewcommand\thesubsubsection{\alph{subsubsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    %\renewcommand\labelitemi{\scriptsize\faDotCircle[regular]}
    %\renewcommand\labelitemii{\scriptsize\faAngleDoubleRight}

    \newmdenv[%
        skipabove = \baselineskip,
        skipbelow = 0pt,
        innerleftmargin = 4mm,
        innerrightmargin = 10pt,
        innertopmargin = 5pt,
        innerbottommargin = 5pt,
        middlelinewidth = 2.6pt,
        hidealllines = true,
        %leftline = true,
        frametitleaboveskip=5pt,
        frametitlebelowskip = 5pt,%
        frametitlefont={\normalfont\large\bfseries},
        frametitlebackgroundcolor=secondarycolor,
        singleextra={
            \draw[line width=2mm,primarycolor]
                (O |- P) -- +(0,-\mdfframetitleboxtotalheight);
        },
        nobreak,
    ]{questionenv}

    % Question
    \NewDocumentEnvironment{QA}{ m }%
    {%
        \begin{questionenv}[frametitle=#1]%
        }%
        {%
        \end{questionenv}%
    }
\fi

\if@tp
    \definecolor{primarycolor}{HTML}{03045e}
    \definecolor{secondarycolor}{HTML}{caf0f8}

    \renewcommand\partname{Axe}
    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\arabic{subsection}}
    \renewcommand\thesubsubsection{\Alph{subsubsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\color{primarycolor}\scriptsize\faDotCircle[regular]}
    %\renewcommand\labelitemii{\color{black}\scriptsize\faChevronRight}

    \newcounter{qcounter}
    \newmdenv[%
        skipabove = \baselineskip,
        skipbelow = 0pt,
        innerleftmargin = 5mm,
        innerrightmargin = 10pt,
        innertopmargin = 5pt,
        innerbottommargin = 5pt,
        middlelinewidth = 2.6pt,
        hidealllines = true,
        %leftline = true,
        frametitleaboveskip=5pt,
        frametitlebelowskip = 5pt,%
        frametitlefont={\normalfont\large\bfseries},
        frametitlebackgroundcolor=secondarycolor,
        singleextra={
            \fill[primarycolor]
                (O |- P)  -- +(3mm,-0.5\mdfframetitleboxtotalheight) --
                +(0,-\mdfframetitleboxtotalheight) -- cycle;
            %\node {{Q~\arabic{qcounter}}};
        },
        nobreak,
    ]{questionenv}

    % Question
    \NewDocumentEnvironment{Q}{m}%
    {%
        \begin{questionenv}[frametitle=#1]%
            \renewcommand\labelenumi{\bfseries\color{thislc}\arabic{enumi})}%
        }%
        {%
        \end{questionenv}%
    }
\fi

\if@ds
    \definecolor{primarycolor}{HTML}{03045e}
    \definecolor{secondarycolor}{HTML}{caf0f8}

    \renewcommand\partname{Exercice}
    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\Alph{subsection}}
    \renewcommand\thesubsubsection{\arabic{subsubsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\color{primarycolor}\scriptsize\faDotCircle[regular]}
    %\renewcommand\labelitemii{\color{black}\scriptsize\faChevronRight}

    \newcounter{qacounter}
    \newmdenv[%
        skipabove = \baselineskip,
        skipbelow = 0pt,
        innerleftmargin = 8mm,
        innerrightmargin = 10pt,
        innertopmargin = 5pt,
        innerbottommargin = 5pt,
        middlelinewidth = 2.6pt,
        hidealllines = true,
        %leftline = true,
        frametitleaboveskip=5pt,
        frametitlebelowskip = 5pt,%
        frametitlefont={\normalfont\large\bfseries},
        frametitlebackgroundcolor=secondarycolor,
        singleextra={
            \stepcounter{qacounter}
            \node[circle,fill=primarycolor,text=secondarycolor,inner sep=0pt,
                  minimum size=6mm,font=\bfseries]
                at ($(O |- P)+(4mm,-3.5mm)$) {\arabic{qacounter}};
        },
        nobreak,
    ]{questionenv}

    % Question
    \NewDocumentEnvironment{QA}{m}%
    {%
        \begin{questionenv}[frametitle=#1]%
        }%
        {%
        \end{questionenv}%
    }
\fi

\if@mypb
    \definecolor{primarycolor}{HTML}{d90429}
    \definecolor{secondarycolor}{HTML}{edf2f4}

    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\arabic{subsection}}
    \renewcommand\thesubsubsection{\alph{subsubsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\scriptsize\faDotCircle[regular]}
    \renewcommand\labelitemii{\scriptsize\faAngleDoubleRight}

    \newcounter{qacounter}
    \newmdenv[%
        skipabove = \baselineskip,
        skipbelow = 0pt,
        innerleftmargin = 3mm,
        innerrightmargin = 3mm,
        innertopmargin = 5pt,
        innerbottommargin = 5pt,
        middlelinewidth = 2.6pt,
        hidealllines = true,
        %leftline = true,
        frametitleaboveskip=5pt,
        frametitlebelowskip = 5pt,%
        frametitlefont={\normalfont},
        frametitlebackgroundcolor=secondarycolor,
        singleextra={
            \stepcounter{qacounter}
            \draw[line width=1mm,primarycolor]
                (O |- P) -- +(0,-\mdfframetitleboxtotalheight);
        },
        nobreak,
    ]{questionenv}

    % Question
    \NewDocumentEnvironment{QA}{m}%
    {%
        \begin{questionenv}[frametitle=#1]%
        }%
        {%
        \end{questionenv}%
    }
\fi

% DIAS
\if@dias
    \definecolor{primarycolor}{HTML}{03045e}
    \definecolor{secondarycolor}{HTML}{caf0f8}

    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\Alph{subsection}}
    \renewcommand\thesubsubsection{\arabic{subsubsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\color{primarycolor}\scriptsize\faDotCircle[regular]}
    %\renewcommand\labelitemii{\color{black}\scriptsize\faChevronRight}

    \newcounter{qacounter}
    \newmdenv[%
    skipabove = \baselineskip,
    skipbelow = 0pt,
    innerleftmargin = 6mm,
    innerrightmargin = 2mm,
    innertopmargin = 5pt,
    innerbottommargin = 5pt,
    middlelinewidth = 2.6pt,
    hidealllines = true,
    %leftline = true,
    frametitleaboveskip=5pt,
    frametitlebelowskip = 5pt,%
    frametitlefont={\normalfont},
    frametitlebackgroundcolor=secondarycolor,
    singleextra={
        \stepcounter{qacounter}
        \node[fill=primarycolor,text=white,inner sep=0pt,font=\bfseries,
            minimum height=\mdfframetitleboxtotalheight,minimum width=4mm] at
            ($(O |- P)+(2mm,-0.5\mdfframetitleboxtotalheight)$)
            {\arabic{qacounter}};
    },
    nobreak,
    ]{questionenv}

    % Question
    \NewDocumentEnvironment{QA}{m}%
    {%
        \begin{questionenv}[frametitle=#1]%
        }%
        {%
        \end{questionenv}%
    }
\fi


% tikz setup
\tikzset{%
    dim/.tip={Stealth[sep].Bar[width=2mm]},
    >=Stealth,
}

% axes
\def\caraxes(#1,#2=#3,#4=#5){%
    \coordinate (#1) at (0,0);
    \node[left] at (#1) {$#1$};
    \draw[-Latex] (#1) -- +(#3,0) node[right] {$#2$};%
    \draw[-Latex] (#1) -- +(0,#5) node[above] {$#4$};%
}

% mdframed staff --------------------------------------------------------------
% Simple box: left border and title
\newmdenv[%
    skipabove = \baselineskip,
    skipbelow = 0pt,
    innerleftmargin = 10pt,
    innerrightmargin = 10pt,
    innertopmargin = 5pt,
    innerbottommargin = 5pt,
    middlelinewidth = 2.6pt,
    hidealllines = true,%
    leftline = true,%
    frametitleaboveskip=5pt,%
    frametitlebelowskip = 0pt,%
    frametitlefont={\normalfont\large\bfseries},
    nobreak,
]{llboxenv}

\NewDocumentEnvironment{llbox}{m m m}%
{%
    \begin{llboxenv}[linecolor=#1, backgroundcolor=#2, frametitle=#3]%
        \colorlet{thislc}{#1}%
        \colorlet{thisbg}{#2}%
        \renewcommand\labelenumi{\bfseries\color{thislc}\arabic{enumi})}%
    }%
    {%
    \end{llboxenv}%
}

% Simple box: centered text
\newmdenv[%
    skipabove = \baselineskip,
    skipbelow = 0pt,
    innerleftmargin = 10pt,
    innerrightmargin = 10pt,
    innertopmargin = 5pt,
    innerbottommargin = 5pt,
    middlelinewidth = 1pt,
    align = center,
]{centextenv}

\NewDocumentEnvironment{centext}{m m}%
{%
    \begin{centextenv}[linecolor=#1, backgroundcolor=#2]%
        \colorlet{thislc}{#1}%
        \colorlet{thisbg}{#2}%
        \renewcommand\labelenumi{\bfseries\color{thislc}\arabic{enumi})}%
    }%
    {%
    \end{centextenv}%
}
% ------------------------------------------------------------------------------

% tcolorbox staff --------------------------------------------------------------
\colorlet{mathboxcolframe}{primarycolor}
\colorlet{mathboxcolback}{white}
\NewDocumentCommand{\mathbox}{ O{mathboxcolframe} O{mathboxcolback} m}{%
    \tcboxmath[colframe=#1,colback=#2,boxrule=1pt,sharp corners,
    left=0pt,right=0pt,top=0pt,bottom=0pt,boxsep=2mm]{#3}
}
% ------------------------------------------------------------------------------

% ------------------------------------------------------------------------------
% Chemistry
% ------------------------------------------------------------------------------
\include{chemistry.code.tex}

% ------------------------------------------------------------------------------
% Physics
% ------------------------------------------------------------------------------
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

% Math
\everymath{\displaystyle}

% pgfplots
\RequirePackage{pgfplots}
\definecolor{majorgridcolor}{HTML}{a8dadc}
\definecolor{minorgridcolor}{HTML}{f1faee}
\pgfplotsset{
	grid=both,
	axis x line=middle,
	axis y line=middle,
	minor tick num=4,
	legend cell align=left,
	legend pos=north east,
	every axis x label/.append style={
		at={(1,0)},anchor=west,
	},
	every axis y label/.append style={
		at={(0,1)},anchor=west,
	},
	every axis legend/.append style={
		at={(1,1)},anchor=north,
	},
	every minor grid/.append style={
		very thin,color=minorgridcolor,
	},
	every major grid/.append style={
		thin,color=majorgridcolor,
	},
	tick align=inside,
	major tick length=0.15cm,
	minor tick length=0.08cm,
	every major tick/.append style={
		thin,black,
	},
	every minor tick/.append style={
		very thin,black,
	},
}



\endinput
