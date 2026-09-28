\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{agregation}[2024/09/24 Class pour l'agrégation]

%% Declaration of Options
% Article options
\DeclareOption{10pt}{
    \PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption{12pt}{
    \PassOptionsToClass{\CurrentOption}{article}
}

% Global indentation option
\newif\if@noindent
\DeclareOption{noindent}{\@noindenttrue}

% Fallback
\DeclareOption*{
    \ClassWarning{article}{Unknown option '\CurrentOption'}
}

%% Execute default options
\ExecuteOptions{10pt}

%% Process given options
\ProcessOptions\relax

%% Load base
\LoadClass{article}

%% Load additional packages and commands.
\RequirePackage[top=2cm,bottom=2cm]{geometry}
\RequirePackage[most]{tcolorbox} 
\RequirePackage{fancyhdr}
\RequirePackage{graphicx}
\RequirePackage{enumitem}
\RequirePackage[version=4]{mhchem}
\RequirePackage{siunitx}
\RequirePackage{esvect}
\RequirePackage{tikz}
\RequirePackage{float}
\RequirePackage{amsmath}
\RequirePackage{mismath}
\RequirePackage{amssymb}
\RequirePackage{lipsum}



\if@noindent
    \setlength{\parindent}{0pt}
\fi



\everymath{\displaystyle}

\usetikzlibrary{%
    decorations.pathmorphing, decorations.pathreplacing,
    decorations.shapes,arrows.meta,positioning,calc,shapes.geometric
}

\colorlet{GOLD}{orange!8!blue!5!yellow}

%% Constantes physqiues
\input{les_constantes_physiques.tex}

%% Units
\sisetup{inter-unit-product = \ensuremath { { } \cdot { } } }
\DeclareSIUnit{\v}{\meter\per\second}
\DeclareSIUnit{\a}{\meter\per\square\second}
\DeclareSIUnit{\G}{\newton\square\meter\per\square\kilo\gram}


%% Head-Foot
\pagestyle{fancy}
\fancyhf{}
\setlength{\headheight}{17pt}
\fancyhead[R]{\textit{\nouppercase{\rightmark}}}
\fancyhead[L]{\textit{\nouppercase{\leftmark}}}
\fancyfoot[L]{Issam NAJMA - Email: \texttt{mr.najma.issam@gmail.com}}
\fancyfoot[R]{\thepage}
\renewcommand{\headrulewidth}{0.5pt}
\renewcommand{\footrulewidth}{0.5pt}



%% Sectionning
\newcommand\partie{\@startsection%
    {section}%
    {1}%
    {\z@}%
    {-3ex}%
    {2ex}%
    {\normalfont\Large\bfseries}}
\renewcommand\thesection{\Roman{section}}


\endinput
