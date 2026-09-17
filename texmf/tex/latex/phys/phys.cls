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

\RequirePackage[left=1cm,right=1cm,top=1cm,bottom=2cm,footskip=1cm]{geometry}
\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage{graphicx}
\RequirePackage[dvipsnames,svgnames]{xcolor}
\RequirePackage[export]{adjustbox}
\RequirePackage{amsmath}
\RequirePackage{mathtools}
\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage[version=4]{mhchem}
\RequirePackage{stmaryrd}
\RequirePackage{float}
\RequirePackage{esvect}
\RequirePackage{LBox}
%\RequirePackage{fourier}
\RequirePackage{lipsum}
\RequirePackage{tikz}
\RequirePackage[most]{tcolorbox}
\RequirePackage{pifont}
\RequirePackage{latexcolors}
\RequirePackage{siunitx}
\RequirePackage{fontawesome5}
\RequirePackage{csquotes}
\RequirePackage{chemfig}
%\RequirePackage{arabtex}
\RequirePackage[explicit]{titlesec} % 
\RequirePackage{booktabs}
\RequirePackage{tabularx}
\RequirePackage{enumitem}
\RequirePackage{subcaption}
\RequirePackage{hyperref}
\RequirePackage{skull}


% Colors
\input{colors}


\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\input{circuitikz-setup.tex}
\setchemfig{fixed length=true}

%  typeset words in Arabic

% Load useful local units
\input{siunitx-local-units}
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

    \titleformat{\part}[display]
        {\bfseries\Large}
        {\filleft\textsc{Partie}~\thepart}
        {0.4ex}
        {\titlerule\vspace{1ex}\filright}
        [\vspace{1ex}\titlerule]

    \setlist{topsep=2pt,itemsep=-2pt}

    \newgeometry{%
        inner=1cm,
        outer=1cm,
        top=1cm,
        bottom=1.5cm,
        footskip=1cm,
    }

	% Old style
    \renewcommand\thesection{Execice~\arabic{section}~:}
    \renewcommand\thesubsection{\Alph{subsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \newcounter{exercice}
    \stepcounter{exercice}%
    \input{exercise-styles.tex}
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
    \definecolor{boxbg}{HTML}{ffffff}
    \definecolor{defcolor}{HTML}{023e8a}
    \definecolor{cccolor}{HTML}{bc4749}
    \definecolor{remcolor}{HTML}{4f772d}

    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\arabic{subsection}}
    \renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\scriptsize\faAngleDoubleRight}
    \renewcommand\labelitemii{\scriptsize\faAngleRight}

    \NewTColorBox{skeleton}{ o o m }{%
        enhanced,fonttitle=\bfseries,sharp corners,leftupper=5.5mm,
        boxrule=0pt,frame hidden,
        IfValueTF={#1}{colbacktitle=#1}{colbacktitle=tcbfgcolor},
        IfValueTF={#2}{colback=#2}{colback=tcbbgcolor},
        title=#3,lefttitle=0pt,
        before title={\faCompass~},
        drop fuzzy shadow
    }

    %\NewDocumentEnvironment{definition}{ }%
    %{\begin{skeleton}[title={Définition},colframe=defcolor]}{\end{skeleton}}
    %
    %\NewDocumentEnvironment{remarque}{ }%
    %{\begin{skeleton}[title={Remarque},colframe=remcolor]}{\end{skeleton}}
    %
    %\NewDocumentEnvironment{conclusion}{ }%
    %{\begin{skeleton}[title={Conclusion},colframe=cccolor]}{\end{skeleton}}

    \NewDocumentEnvironment{preambule}{ }%
    {\begin{skeleton}[preambulefgcolor]{Préambule}}{\end{skeleton}}

    \NewTColorBox{attention}{ }{attentionstyle}

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

    \renewcommand\partname{Partie}
    \renewcommand\thesection{\Roman{section}}
    \renewcommand\thesubsection{\thesection.\Alph{subsection}}
    \renewcommand\thesubsubsection{\thesubsection.\arabic{subsubsection}}
    %k\renewcommand\labelenumi{\bfseries\arabic{enumi})}
    \setlength{\fboxsep}{1.4pt}
    \setlength{\fboxrule}{0.6pt}
    %\renewcommand\labelenumi{\framebox{\bfseries Q \arabic{enumi}}}
    %\renewcommand\labelenumi{\tikz{\node[draw, circle, fill=blue!20]{\arabic{enumi}};}}
    \renewcommand\labelenumi{\qitem{Q\,\arabic{enumi}}}
    \renewcommand\labelenumii{\bfseries\alph{enumii})}
    \renewcommand\labelitemi{\color{primarycolor}\scriptsize\faDotCircle[regular]}
    %\renewcommand\labelitemii{\color{black}\scriptsize\faChevronRight}

    \setenumerate{leftmargin=14mm}

    \titleformat{\part}[block]
        {\clearpage%
         \noindent%
        \begin{tcolorbox}[partstyle]}
        {%
            \thepart%
            \tcblower%
            #1%
        }
        {0pt}
        {}
        [\end{tcolorbox}]

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

    % Document
    \newtcbtheorem[]{tcbdoc}{Document}{docstyle}{}
    \NewDocumentEnvironment{doc}{ m }{
        \renewcommand\labelitemi{\ding{112}}
        \renewcommand\labelitemii{\ding{169}}
        \begin{tcbdoc}[]{#1}{}
    }{
        \end{tcbdoc}
    }

    % Données
    \newtcbtheorem{tcbdonnees}{Données}{donneesstyle}{}
    \NewDocumentEnvironment{donnees}{ m }{
        \renewcommand\labelitemi{\color{donneesfgcolor}\ding{49}}
        \renewcommand\labelitemii{\ding{169}}
        \begin{tcbdonnees}[]{#1}{}
    }{\end{tcbdonnees}}

    % Réponse box
    \NewTColorBox[auto counter]{reponse}{ O{1} o }{reponsestyle,
        IfValueTF={#2}{title={Q~\thetcbcounter~: #2}}{title={Q~\thetcbcounter}},
        %after title={\hfill\color{baremecolor} $(\mathbf{#1})$},
        before upper={%
            \renewcommand\labelitemi{\color{repfgcolor}\footnotesize\faPlus}
            \renewcommand\labelitemii{\ding{169}}
        },
        overlay={%
            %\draw [red,very thick](frame.north east) -- (frame.south west);
        }
    }
    %\NewDocumentEnvironment{reponse}{ O{1} o }{
    %    \begin{tcbreponse}[#1][#2]
    %}{\end{tcbreponse}}


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

% ------------------------------------------------------------------------------

% ------------------------------------------------------------------------------
% Chemistry
% ------------------------------------------------------------------------------
\input{chemistry.code.tex}

% ------------------------------------------------------------------------------
% Physics
% ------------------------------------------------------------------------------
\input{les_constantes_physiques.tex}

% Math
\everymath{\displaystyle}

% tikz and pgfplots
\RequirePackage{pgfplots}
\pgfplotsset{compat=1.18}
\definecolor{minorgridcolor}{HTML}{dee2e6}
\definecolor{majorgridcolor}{HTML}{adb5bd}
\input{tikz-setup.tex}
\input{pgfplots-setup.tex}



% Create a section: testing
%\renewcommand{\part}{\@startsection%
%    {part}%
%    {-1}%
%    {\z@}%
%    {-1cm}%
%    {1cm}%
%    {\normalfont\LARGE\bfseries}}

\def\dotfilll#1{\cleaders\hbox to #1{.}\hfill}
\newcommand\dotline[2][.5em]{\leavevmode\hbox to #2{\dotfilll{#1}\hfil}}


\input{tcolorbox-setup.tex}


% Fix for space above/below caused by floated figure
\setlength{\intextsep}{0pt} 


\endinput
