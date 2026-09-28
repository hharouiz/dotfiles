\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{polycop}[2025/03/03 A class for writing a "polocopie"]

\DeclareOption{sans}{
	\renewcommand{\familydefault}{\sfdefault}
}

\DeclareOption{roman}{
	\renewcommand{\familydefault}{\rmdefault}
}

\DeclareOption{10pt}{
	\PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption{11pt}{
	\PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption{12pt}{
	\PassOptionsToClass{\CurrentOption}{article}
}

\DeclareOption{a4}{
    \PassOptionsToClass{a4paper}{article}
}

\DeclareOption{twoside}{
    \PassOptionsToClass{twoside}{article}
}

\ExecuteOptions{roman,10pt,a4}

\ProcessOptions\relax


\LoadClass{article}

\RequirePackage{fouriernc}
\RequirePackage[T1]{fontenc}
\RequirePackage{geometry}
\RequirePackage{subcaption}
\RequirePackage{xcolor}
\RequirePackage[most]{tcolorbox}
\RequirePackage{float}
\RequirePackage{siunitx}
\RequirePackage{esvect}
\RequirePackage{tikz}
\RequirePackage{pgfplots}
\RequirePackage[version=4]{mhchem}
\RequirePackage{subcaption}
\RequirePackage{pifont}
\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage[inline]{enumitem}
\RequirePackage{array}
\RequirePackage{tabularx}
\RequirePackage{titlesec}
\RequirePackage{setspace}
\RequirePackage{chemfig}
\RequirePackage{enumitem}
\RequirePackage{multirow}
\RequirePackage{latexcolors}
\RequirePackage{hyperref}
\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\RequirePackage{graphicx}

\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    urlcolor=blue,
}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%


\geometry{left=5mm,right=5mm,top=5mm,bottom=1cm,footskip=5mm}
\titlespacing{\section}{0pt}{*1.5}{*1}
\titlespacing{\subsection}{0pt}{*1.5}{*1}

\everymath{\displaystyle}
\setlength{\parindent}{0pt}

% New commands
\renewcommand{\labelenumi}{\bfseries\arabic{enumi}.}
\renewcommand{\labelenumii}{\bfseries\labelenumi\arabic{enumii}.}
\renewcommand{\labelenumiii}{\bfseries\labelenumii\arabic{enumiii}.}
\renewcommand{\labelitemi}{\ding{112}}
\renewcommand{\labelitemii}{\ding{70}}

\renewcommand\thesection{\Roman{section}}
\renewcommand\thesubsection{\arabic{subsection}.}
\renewcommand\thesubsubsection{\alph{subsubsection})}

\graphicspath{ {images/} }

\let\emph\relax
\DeclareTextFontCommand{\emph}{\bfseries\itshape}

\def\dotfilll#1{\cleaders\hbox to #1{.}\hfill}
\newcommand\dotline[2][.5em]{\leavevmode\hbox to #2{\dotfilll{#1}\hfil}}

% Boxes
\NewTColorBox[auto counter]{activite}{ }{%
    enhanced,colframe=black,colback=white,
    colbacktitle=white,coltitle=black,boxrule=0.6pt,
    top=1mm,bottom=1mm,left=2mm,right=2mm,
    title={Activité~\thetcbcounter},fonttitle=\bfseries\scshape,
    unbreakable
}%

\NewTColorBox{conclusion}{ }{%
    enhanced,colframe=black,colback=white,
    colbacktitle=white,coltitle=black,boxrule=0.6pt,
    top=1mm,bottom=1mm,left=2mm,right=2mm,
    title={Conclusion},fonttitle=\bfseries\scshape,
    unbreakable
}%

\NewTColorBox{remarque}{ }{%
    enhanced,colframe=black,colback=white,
    colbacktitle=white,coltitle=black,boxrule=0.6pt,
    top=1mm,bottom=1mm,left=2mm,right=2mm,
    title={Remarque},fonttitle=\bfseries\scshape,
    unbreakable
}%

\NewTColorBox[auto counter]{application}{ }{%
    enhanced,colframe=black,colback=white,
    colbacktitle=white,coltitle=black,boxrule=0.6pt,
    top=1mm,bottom=1mm,left=2mm,right=2mm,
    title={Application~\thetcbcounter},fonttitle=\bfseries\scshape,
    unbreakable
}%


\sisetup{%
    inter-unit-product = \ensuremath { { } \cdot { } },
    output-decimal-marker = {,},
    print-unity-mantissa=false,
}

\usetikzlibrary{arrows.meta,decorations.pathmorphing,matrix,decorations.shapes,
shapes.symbols,shapes.geometric,3d,calc,positioning,patterns,shapes.misc,
decorations.markings,shadows,fadings,patterns,shadings,intersections,
shapes.arrows,shapes.multipart,bending}
\tikzset{>=Stealth,
    qstyle/.style={draw},
}


\pgfplotsset{compat=1.18}


\colorlet{mathboxcolframe}{black}
\colorlet{mathboxcolback}{white}
\NewDocumentCommand{\mathbox}{ O{mathboxcolframe} O{mathboxcolback} m}{%
    \tcboxmath[colframe=#1,colback=#2,boxrule=1pt,arc=2mm,
    left=0pt,right=0pt,top=0pt,bottom=0pt,boxsep=4mm,natural height]{#3}
}


% Fix for space above/below caused by floated figure
\setlength{\intextsep}{0pt} 


\newcommand{\answerlines}[2][1]{%
\par\vspace{2mm}%
\noindent%
\foreach \n in {1,...,#1} {%
    \noindent%
    \hspace*{-\parindent}%
    \leaders\hbox{\kern.1em.\kern.1em}\hfill\null% Perfect dotted line
    \ifnum\n<#1 \par\vspace{#2}\fi% Space between lines except last
}%
\par\vspace{3mm}%
} 


\DeclareSIUnit\dirham{\text{Dh}}
\DeclareSIUnit{\tr}{\text{tr}}
\DeclareSIUnit{\Wh}{\text{Wh}}


\captionsetup[table]{name=Tableau}


%\newcommand\chn[1]{\gdef\ch@n{#1}}
%\newcommand\module[1]{\gdef\@module{#1}}
%\renewcommand*\maketitle{%
%    \begin{center}
%        \begin{tikzpicture}
%            \node[draw,inner xsep=5mm,inner ysep=3mm,minimum width=9cm,
%                  minimum height=2cm,font=\bfseries\LARGE,
%                  align=center] (T) {\@title};
%            \node[below left,inner xsep=0pt,
%                  font=\scriptsize\scshape\bfseries] at (T.south east)
%                  {\@date};
%            \node[below right,inner xsep=0pt,
%                  font=\footnotesize\scshape\bfseries] at (T.south west)
%                  {\@module};
%            \node[above right=0.6pt and 0,draw,fill=lightgray,
%                  font=\footnotesize\scshape\bfseries] at (T.north west)
%                  {Chapitre~\ch@n};
%        \end{tikzpicture}
%    \end{center}
%    %\vspace{-9mm}
%}

\endinput
