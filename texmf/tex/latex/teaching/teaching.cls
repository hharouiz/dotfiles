\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{teaching}[2024/10/21 A class for students]

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

\DeclareOption{twocolumn}{
    \PassOptionsToClass{twocolumn}{article}
}

\newif\ifFrench\Frenchfalse
\DeclareOption{french}{\Frenchtrue}

\newif\if@cours
\@coursfalse
\DeclareOption{cours}{\@courstrue}

\newif\if@td\@tdfalse
\DeclareOption{td}{\@tdtrue}

\newif\if@photo\@photofalse
\DeclareOption{photo}{\@phototrue}

\newif\if@eleve\@elevefalse
\DeclareOption{eleve}{\@elevetrue}

\newif\if@ds\@dsfalse
\DeclareOption{ds}{\@dstrue}

\newif\if@exam\@examfalse
\DeclareOption{exam}{\@examtrue}

\newif\if@national
\@nationalfalse
\DeclareOption{national}{\@nationaltrue}

\ExecuteOptions{roman,10pt,a4}

\ProcessOptions\relax


\LoadClass{article}

\RequirePackage{fontspec}
\RequirePackage{polyglossia}
\RequirePackage{geometry}
\RequirePackage{caption}
\RequirePackage{subcaption}
\RequirePackage[svgnames]{xcolor}
\RequirePackage[all]{tcolorbox}
\RequirePackage{float}
\RequirePackage{siunitx}
\RequirePackage{esvect}
\RequirePackage{tikz}
\RequirePackage{pgfplots}
%\RequirePackage{arabtex}
\RequirePackage[version=4]{mhchem}
\RequirePackage{pifont}
%\RequirePackage{amsmath}
%\RequirePackage{amsfonts}
\RequirePackage{amssymb}
\RequirePackage{mathtools}
\RequirePackage[inline]{enumitem}
\RequirePackage{array}
\RequirePackage{tabularx}
\RequirePackage{titlesec}
\RequirePackage{setspace}
\RequirePackage{chemfig}
\RequirePackage{multirow}
\RequirePackage{latexcolors}
\RequirePackage{hyperref}
\RequirePackage[european,straightvoltages,cute inductor,siunitx]{circuitikz}
\RequirePackage{xspace}
\RequirePackage{chemformula}
\RequirePackage{csquotes}
\RequirePackage{lipsum}
\RequirePackage{varwidth}
\RequirePackage{nicefrac}
\RequirePackage{soul}
%\RequirePackage{showframe}
\RequirePackage{svg}
\RequirePackage{fancyhdr}
\RequirePackage[contents={}]{background} % [pages=some]
%\RequirePackage{MnSymbol}   % This will render \sqrt{} as \iint !?
\RequirePackage{multicol}
\RequirePackage{graphicx}
\RequirePackage{dashrule}
\RequirePackage{scrextend}
%\RequirePackage[skip=.5\baselineskip]{parskip}
\RequirePackage{yhmath}


% -----------------------------------------------------------------------------
% Fonts
% -----------------------------------------------------------------------------
%\defaultfontfeatures{Ligatures=TeX}
%\setmainfont{Baskerville}[
%]
%\setsansfont{Fira Sans Light}[%
%    Numbers=OldStyle,
%    BoldFont = Fira Sans Medium,
%    ItalicFont = Fira Sans Light Italic,
%    BoldItalicFont = Fira Sans Medium Italic,
%]
%\setmonofont{Source Code Pro Light}[%
%    BoldFont = Source Code Pro,
%]
%\setmainfont{DM Serif Text}[]
%\setmathrm{TeX Gyre Termes}  % Same as text font
\setmathrm{Libertinus Serif Bold}
\newfontfamily{\TitleFont}{Domaine Disp Nar Semibold}
\newfontfamily{\DoctypeFont}{Montserrat Black}
\newfontfamily{\AuthorFont}{Georgia Bold}
\newfontfamily{\InstituteFont}{Georgia}
\newfontfamily{\DateFont}{Top Secret}
\newfontfamily{\SideTextFont}{1942 report}

% Antykwa Toruńska (https://tug.org/FontCatalogue/antykwatorunska/)
\usepackage[math,condensed]{anttor}
\usepackage[QX]{fontenc}
\SetSymbolFont{operators}   {anttbold}{OT1}{\rmdefault m}{m}{n}
\SetSymbolFont{letters}     {anttbold}{OML}{\rmdefault}{m}{n}
\SetSymbolFont{symbols}     {anttbold}{OMS}{\rmdefault}{m}{n}
\SetSymbolFont{largesymbols}{anttbold}{OMX}{\rmdefault}{m}{n}
\mathversion{anttbold}
\DeclareSIPrefix\micro{\text{\symbol{'7}}}{-6}
% -----------------------------------------------------------------------------


\hypersetup{
    colorlinks=true,
    linkcolor=blue,
    urlcolor=blue,
}

% External Setup
\input{tikz-setup.tex}
\input{circuitikz-setup.tex}
\input{colors.tex}
\input{siunitx-local-units.tex}
\input{pgfplots-setup.tex}
\input{chemfig-setup.tex}
\input{les_constantes_physiques.tex}
\input{tcolorbox-setup.tex}
\input{minted-setup.tex}

%%%%% Polyglossia Setting
\ifFrench
    \setdefaultlanguage{french}
\else
    \setdefaultlanguage{english}
\fi

%%%%% Penalties
\clubpenalty=1000 %penalty for breaking after the first line of a par
\widowpenalty=1000 %penalty for breaking before the last line of a par
\brokenpenalty=700 %penalty for page breaking after hyphenated line
\tolerance=500 %Allow LaTeX to break lines too often. It prevents line for overflowing in the margins

\pgfdeclareverticalshading{rainbow}{100bp}
{color(0bp)=(red); color(25bp)=(red); color(35bp)=(yellow);
color(45bp)=(green); color(55bp)=(cyan); color(65bp)=(blue);
color(75bp)=(violet); color(100bp)=(violet)}

\newcolumntype{L}{>{\raggedright\arraybackslash}X}%
\newcolumntype{R}{>{\raggedleft\arraybackslash}X}%
\newcolumntype{C}{>{\centering\arraybackslash}X}%

%\newcolumntype{L}[1]{>{\raggedright\arraybackslash}p{#1}}
%\newcolumntype{C}[1]{>{\centering\arraybackslash}p{#1}}
%\newcolumntype{R}[1]{>{\raggedleft\arraybackslash}p{#1}}

\geometry{%
    left=2cm,
    right=2cm,
    top=1.5cm,
    bottom=2cm,
}

\everymath{\displaystyle}
\setlength{\parindent}{0pt}
\DeclareMathOperator{\sinc}{sinc}

% Colors
% Shade of gray: f8f9fa,e9ecef,dee2e6,ced4da,adb5bd,6c757d,495057,343a40,212529
\definecolor{boxbg}{HTML}{ffffff}
\definecolor{minorgridcolor}{HTML}{dee2e6}
\definecolor{majorgridcolor}{HTML}{adb5bd}
\definecolor{cccolor}{HTML}{bc4749}
\definecolor{actcolor}{HTML}{4f772d}
\definecolor{appcolor}{HTML}{640D5F}
\definecolor{execolor}{HTML}{8FD14F}
\definecolor{remcolor}{HTML}{00b4d8}


% New commands
\renewcommand{\labelenumi}{\bfseries\arabic{enumi}.}
\renewcommand{\labelenumii}{\bfseries\alph{enumii})}
%\renewcommand{\labelenumii}{\bfseries\labelenumi\arabic{enumii}.}
%\renewcommand{\labelenumiii}{\bfseries\labelenumii\arabic{enumiii}.}
% \renewcommand{\labelitemi}{\ding{112}}
% \renewcommand{\labelitemii}{\ding{251}}

\renewcommand\thesection{\Roman{section}}
\renewcommand\thesubsection{\arabic{subsection}.}
\renewcommand\thesubsubsection{\thesubsection\arabic{subsubsection}.}

\newcommand\textcorr[1]{\textcolor{corrcolor}{\textbf{#1}}}
\newcommand{\ttslash}{\texttt{/}\xspace}

\newcommand{\pttomm}[1]{\pgfmathparse{#1 / 1mm}\pgfmathresult}
\def\getwidthofnode#1#2{%
    \pgfextractx{#1}{\pgfpointanchor{#2}{east}}
    \pgfextractx{\pgf@xa}{\pgfpointanchor{#2}{west}}
    \advance#1 by -\pgf@xa
}

\newcommand\newtimes{{\Large\textcolor{corrcolor}{\textbf{\texttimes}}}}



\if@td
    \setlist{topsep=-2pt,itemsep=-4pt,leftmargin=9mm}
    \newgeometry{top=5mm,bottom=1cm,left=1cm,right=1cm,footskip=6mm}
    \renewcommand\thesection{Exercice~\arabic{section}~:}
    \titlespacing{\section}{0pt}{*0.7}{*.4}
    \setlength{\intextsep}{0mm} 
    \setlength{\parskip}{0pt}
    \renewcommand{\labelenumi}{\bfseries\arabic{enumi}\ding{119}}
    \renewcommand{\labelenumii}{\bfseries\arabic{enumi}.\arabic{enumii}\ding{119}}
    % Exercice
    \NewTColorBox[auto counter]{exercice}{ O{} }{%
        enhanced,colframe=black,colback=white,
        colbacktitle=white,coltitle=black,boxrule=0.6pt,
        top=1mm,bottom=1mm,left=2mm,right=2mm,before skip=1mm,after skip=1pt,
        title={Exercice~\thetcbcounter~:~\hskip2mm},fonttitle=\bfseries\scshape,
        after title={#1},breakable
    }%

    \NewDocumentEnvironment{serie}{ }%
    {%
        \begin{tcbitemize}[raster columns=1,size=minimal,colframe=black,
            skin=empty,coltitle=black,bottomtitle=3mm,
            fonttitle=\bfseries\Large,title={Exercice~\thetcbrasternum}]
    }{\end{tcbitemize}}
\fi

\if@ds
    \setlist{itemsep=0pt,topsep=0pt,leftmargin=9mm}
    \newgeometry{top=7mm,bottom=1cm,left=1cm,right=1cm,footskip=5mm,
        reversemarginpar,marginparsep=0mm}
    %\setlength{\parskip}{0pt}
    \setlength{\intextsep}{0mm} 
    %\tcbset{top=5mm,bottom=5mm,left=1cm,right=1cm}
    \renewcommand\thesection{Exercice~\arabic{section}~:}
    %\renewcommand\thesubsection{\Alph{subsection}}
    \renewcommand{\labelenumi}{\bfseries\arabic{enumi}/}
    \renewcommand{\labelenumii}{\bfseries\arabic{enumi}.\arabic{enumii})}
    % \renewcommand{\labelenumiii}{\bfseries\alph{enumiii})}
    % \titlespacing{\section}{0pt}{*1}{*0.7}
    \newcounter{exc}
    \NewDocumentEnvironment{exc}{ O{} m }%
    {%
        \begin{skeleton}[title={Exercice~\refstepcounter{exc}\theexc~: #2},
            colframe=black,colbacktitle=white,coltitle=black,boxrule=0.6pt,
            top=2mm,bottom=4mm,left=0mm,right=5mm,
            %before skip=3mm,after skip=1pt,
            unbreakable,#1]
    }%
    {\end{skeleton}}


    \newtcolorbox{beader}[1][]{%
    	width=(\linewidth-3mm)/3,before=,after=\hfill,boxrule=0.8pt,
        colframe=black,colback=white,height=2cm,sharp corners,
        #1}

   \NewDocumentCommand{\dotcorr}{ m }{%
   \tikz[baseline=(X.base)]{
       \node[font=\bfseries] (X) {#1};
       \draw[dotted,line width=0.8pt,black!80]
            ([yshift=-0.4pt]X.base east) -- ([yshift=-0.4pt]X.base west);
   }}

   \NewDocumentCommand{\croix}{ }{%
       \tikz \node[cross out,draw,red,very thick] {};
   }

   % Exercice
   \NewTColorBox[auto counter]{exercice}{ O{} }{%
        enhanced,colframe=black,colback=white,
        colbacktitle=white,coltitle=black,boxrule=0.6pt,
        top=1mm,bottom=3mm,left=2mm,right=2mm,before skip=1mm,after skip=1pt,
        title={Exercice~\thetcbcounter},fonttitle=\bfseries\scshape,
        after title={\normalfont\bfseries~:\quad#1},breakable
    }%

    \renewcommand{\thepart}{\@arabic\c@part}
    \def\part{%
        \par
        \vskip 4ex
        %\clearpage
        \secdef\@part\s@part}
    \def\@part[#1]#2{
        \refstepcounter{part}
        \setcounter{section}{0}
        \noindent\raggedright\normalfont
        \begin{tcolorbox}[enhanced,sharp corners,frame hidden,
            top=5mm,bottom=5mm,left=0mm,right=0mm,boxsep=0mm,boxrule=0mm,
            borderline north={0.75mm}{0mm}{black},
            borderline north={0.15mm}{1mm}{black},
            borderline south={0.15mm}{1mm}{black},
            borderline south={0.75mm}{0mm}{black},
            halign=center,valign=center,
            fontupper=\fontsize{1.2cm}{1.0cm}\fontspec{LT Energy}\selectfont]
            #2
        \end{tcolorbox}
        \vskip 1ex
     }
    \def\s@part#1{}
\fi


\if@exam
    \setitemize{topsep=0pt,itemsep=0pt,leftmargin=8mm}
    \setenumerate{topsep=2pt,itemsep=0pt,leftmargin=8mm}
    \newgeometry{top=7mm,bottom=1.2cm,left=7mm,right=7mm,footskip=6mm}
    %\tcbset{top=5mm,bottom=5mm,left=1cm,right=1cm}
    \renewcommand\thesection{Exercice~\arabic{section}~:}
    \renewcommand\thesubsection{\Alph{subsection}}
    \titlespacing{\section}{0pt}{*1.5}{*1}
    \titlespacing{\subsection}{0pt}{*1.5}{*1}
\fi

\if@photo
    \pagestyle{empty}
    \setlist{topsep=2pt,itemsep=-4pt}
    \tcbset{size=fbox}
    \newgeometry{left=1cm,right=1cm,top=1cm,bottom=1cm}

    \newtcolorbox{image}[1][]{%
        nobeforeafter,tcbox raise base,arc=0pt,outer arc=0pt,
        top=0mm,bottom=0mm,left=0mm,right=0mm,
	    colback=white,colframe=gray,boxrule=0.4pt,
        before skip=1pt,after skip=1pt,#1}
\fi


\if@cours
    \newgeometry{left=1cm,right=1cm,top=1cm,bottom=1.5cm,footskip=5mm}
    \tcbset{top=2mm,bottom=3mm,left=4mm,right=4mm,
            %before skip=3mm,after skip=1pt,
            unbreakable}
    \setlist{leftmargin=10mm,itemsep=0pt,topsep=2pt}
    \setlength{\intextsep}{0mm} 
    \renewcommand\thesubsection{\arabic{subsection})}
    \renewcommand\thesubsubsection{\Alph{subsubsection}}

    \NewTColorBox{definition}{ s }{enhanced jigsaw,
        colback=white,colframe=black,boxrule=0.8pt,
        colbacktitle=white,coltitle=black,fonttitle=\bfseries\scshape,
        titlerule=0pt,top=2pt,bottom=3pt,left=2mm,right=2mm,
        sharp corners,IfBooleanF={#1}{title={Définition}}}

    \NewDocumentEnvironment{relation}{}{%
        \begin{tcbitemize}[raster columns=2,raster rows=1,raster equal height,
            raster force size=false,
            raster every box/.style={enhanced jigsaw,valign=center,boxrule=0pt,
                sharp corners,colback=white,colframe=black},
            raster column 1/.style={add to width=-5cm,halign=center},
            raster column 2/.style={add to width=5cm,leftrule=0.6pt,
                left=3mm,right=3mm,top=0mm,bottom=0mm},
            %before upper={\begin{equation*}},after upper={\end{equation*}},
            %before lower={\begin{description}},after lower={\end{description}},
            ]}
        {\end{tcbitemize}}


    % Application
    \newtcbtheorem[]{tcbapp}{Application}{appstyle}{}
    \NewDocumentEnvironment{application}{ m }{
        \renewcommand\labelitemi{\ding{112}}
        \renewcommand\labelitemii{\ding{169}}
        \begin{tcbapp}[]{#1}{}
    }{
        \end{tcbapp}
    }
\fi

\if@eleve
    \newgeometry{left=1.2cm,right=1.2cm,top=5mm,bottom=1cm,footskip=5mm}
    %\tcbset{top=0mm,bottom=0mm,left=1mm,right=1mm,
    %        %before skip=0mm,after skip=1pt,
    %        unbreakable}
    \setlist{leftmargin=8mm,itemsep=0pt,topsep=0pt}
    \titlespacing{\section}{0pt}{*.7}{*.5}
    \titlespacing{\subsection}{0pt}{*.7}{*.5}
    \titlespacing{\subsubsection}{0pt}{*.7}{*.5}
    %\titlespacing{\paragraph}{0pt}{*1}{*1}
    %\setlength{\parskip}{0pt}

    \renewcommand\thesubsubsection{\Alph{subsubsection}}

    % \colorlet{minorgridcolor}{black!40}
    % \colorlet{majorgridcolor}{black!70}

    \setlength{\intextsep}{0mm} 
\fi


\if@national
    \renewcommand{\labelenumi}{\bfseries\arabic{enumi}.}
    \renewcommand{\labelenumii}{\bfseries\labelenumi\arabic{enumii}.}
    \renewcommand{\labelenumiii}{\bfseries\alph{enumiii}.}
    \newgeometry{top=1cm,bottom=1cm,left=0.8cm,right=0.8cm,footskip=5mm}
    \setlist{leftmargin=7mm,itemsep=-4pt,topsep=3pt}
\fi


\graphicspath{ {images/} }


%\let\emph\relax
%\DeclareTextFontCommand{\emph}{\bfseries\itshape}


\def\dotfilll#1{\cleaders\hbox to #1{.}\hfill}
\newcommand\dotline[2][.5em]{\leavevmode\hbox to #2{\dotfilll{#1}\hfil}}

\newcommand{\sol}[1]{{\color{blue} #1}}


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



\NewDocumentCommand{\fillblank}{s m m}{%
    \IfBooleanTF{#1}{%
        \begin{minipage}{0.99\linewidth}
        \tikz[baseline]{
        \node (ph) {\dotline{\textwidth}};
        \node[anchor=base west,corrfont] at (ph.west) {#3};}
        \end{minipage}
    }{%
        \tikz[baseline]{
        \node (ph) {\dotline{#2}};
        \node[anchor=base,corrfont] at (ph.center) {#3};}
    }
}

% Fix for line break problem
\sloppy

%%% caption
\DeclareCaptionLabelFormat{simple}{#1~#2}
% From The LaTeX companion
\DeclareCaptionStyle{italic}
    {labelfont={sf,bf},textfont={rm,it},indention=18pt,
    labelsep=period,justification=raggedright}
% My Styles
\DeclareCaptionStyle{my}
    {textfont={small,rm,it},labelfont={sc,bf},labelsep=quad,
	aboveskip=3mm,singlelinecheck=true,justification=raggedright,
    format=hang,margin=20pt}
\captionsetup{textfont={small,rm,it},labelfont={sc,bf},labelsep=quad,
	aboveskip=3mm,singlelinecheck=true,justification=raggedright,
    %format=hang,
    margin=0pt,figurename=Fig.}
\labelformat{equation}{(#1)}
\labelformat{figure}{#1}

% Fix for space above/below caused by floated figure
%\setlength{\intextsep}{0mm} 


% fbox options
%\setlength{\fboxsep}{10pt}
\setlength{\fboxrule}{0.8pt}

% Table
\setlength{\arrayrulewidth}{0.8pt}
% \setlength{\tabcolsep}{18pt}  % dont use it for tabularx
\renewcommand{\arraystretch}{1.5}


\endinput
