\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{agreg}[2024/03/09 v1.0 agreg class]

\DeclareOption{10pt}{%
	\PassOptionsToClass{\CurrentOption}{article}
}
\DeclareOption{12pt}{%
    \PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption*{%
	\ClassError{phys}{Unknown option '\CurrentOption'}
}


\ProcessOptions\relax

\LoadClass[a4paper]{article}

\usepackage[left=2cm,right=2cm,top=2cm]{geometry}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{graphicx}
\usepackage[dvipsnames,svgnames]{xcolor}
\usepackage{amsmath}
\usepackage{mathtools}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage[version=4]{mhchem}
\usepackage{float}
\usepackage{esvect}
\usepackage{fourier}
\usepackage{tikz}
\usepackage{hyperref}
\usetikzlibrary{arrows.meta,shapes.geometric,patterns,decorations.pathmorphing,
    decorations.markings,matrix,positioning,calc,intersections,fit,
    decorations.text,3d,decorations.pathreplacing, decorations.shapes,
    backgrounds,quotes}
\usepackage[most]{tcolorbox}
\usepackage{pifont}
\usepackage{latexcolors}
\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\ctikzset{%
	% Colors
	amplifiers/fill=arylideyellow,
	capacitors/fill=ashgrey,
}

% siunitx
\usepackage{siunitx}
\sisetup{%
    inter-unit-product = \ensuremath { { } \cdot { } },
    output-decimal-marker = {,},
    % per-mode = symbol, % symbol, fraction
    print-unity-mantissa=false,
    % uncertainty
    uncertainty-mode = separate,
%    output-open-uncertainty = [,
%    output-close-uncertainty = ],
%    uncertainty-separator = \,
	% table
	table-number-alignment = center,
	table-format = 1.4,
}
\NewDocumentCommand{\qtyexp}{ m m m }{\color{harvardcrimson} 
#1=\qty{#2}{#3}}


\usepackage{csquotes}
\usepackage{chemfig}
\usepackage{LBox}

% 
\setlength\parskip{0.5em}



\NewDocumentEnvironment{experience}{m}%
{%
    \begin{LyDeXBoxSkeleton}{experienceColor}{BoxBackgroundColor}{\titleFactory{experienceColor}{\faUserMd}{#1}}%
    }%
    {%
    \end{LyDeXBoxSkeleton}%
}

\NewDocumentEnvironment{remarque}{m}%
{%
	\begin{LyDeXBoxSkeleton}{noteColor}{BoxBackgroundColor}{\titleFactory{noteColor}{\faInfo}{#1}}%
	}%
	{%
	\end{LyDeXBoxSkeleton}%
}


\NewDocumentCommand{\qr}{ m m }{#1~? {\color{blue}\itshape #2}}

\graphicspath{ {./images/} }

% Math
\everymath{\displaystyle}

% caption
\RequirePackage{caption}
\captionsetup{
	textfont={rm,it},labelfont={sc,bf},labelsep=quad,
	aboveskip=3mm,singlelinecheck=true,justification=raggedright,
	format=hang,margin=20pt,
	figurename=Fig.,
}

% Text
\usepackage{xspace}
\setlength\parindent{0pt}
\NewDocumentCommand{\SYSAM}{}{\texttt{SYSAM}\xspace}
\NewDocumentCommand{\Latis}{}{\texttt{Latis-Pro}\xspace}
\NewDocumentCommand{\GBF}{}{\texttt{GBF}\xspace}
\NewDocumentCommand{\tot}{}{\text{tot}\xspace}


% Notebook Table
\RequirePackage{multirow}
\RequirePackage{booktabs}
\RequirePackage[table]{xcolor}
\RequirePackage{etoolbox}
\RequirePackage{longtable}


\RequirePackage{subcaption}

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

\tikzset{
	mark options={fill=red,draw opacity=0},
}

\endinput
