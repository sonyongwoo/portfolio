/* Yongwoo Son — curriculum vitae
   Publications rendered from data, footer year.            */

(function () {
  'use strict';

  /* ---------------- Data ---------------- */
  const ME = 'Son Y';

  // Titles may carry <i> for taxon and gene names; a manuscript under review has no DOI yet.
  const PUBLICATIONS = [
    {
      year: 2026, cofirst: 0,
      title: 'Isolation and Genetic Characterization of a Virulent Newcastle Disease Virus Subgenotype XIII.1.2 from a Great Cormorant (<i>Phalacrocorax carbo</i>) in South Korea, 2026',
      authors: 'Son Y, Son Y, Kim D, Kim JY, Lee SH, Cho H, Jeong H, Song CS, Lee DH',
      venue: 'Under review',
    },
    {
      year: 2026, cofirst: 0,
      title: 'Emergence of the GI-23 lineage of infectious bronchitis virus in Brazilian backyard poultry',
      authors: 'Araujo AC, Oliveira LM, Son Y, Kim JY, de Lima RR, Scagion GP, Caleiro GS, de Araújo J, Rosa RSM, Arns CW, Cordeiro IM, Dias PRBL, Spilki FR, Lee DH, Ferreira HL',
      venue: '<em>Avian Pathology</em>',
      doi: 'https://doi.org/10.1080/03079457.2026.2718378',
    },
    {
      year: 2026, cofirst: 0,
      title: 'Surveillance and Whole-Genome Analysis of Low Pathogenic Avian Influenza Viruses from Wild Birds in Mongolia, 2025',
      authors: 'Kim JY, Lee DY, Otgontogtokh N, Myagmarsuren T, Seo YR, Son Y, Lee H, Park S, Lee SH, Tseren-Ochir EO, Lee DH, Song CS',
      venue: '<em>Avian Diseases</em>, 70(3), 343–348',
      doi: 'https://doi.org/10.1637/aviandiseases-d-26-00023',
    },
    {
      year: 2026, cofirst: 2,
      title: 'Isolation and whole genome sequencing of an Avian orthoavulavirus 16 from cinereous vulture (<i>Aegypius monachus</i>) in South Korea, 2023',
      authors: 'Son Y, Lee SH, Lee DY, Cho H, Son Y, Kim D, Song CS, Lee DH',
      venue: '<em>Frontiers in Veterinary Science</em>, 13, 1739779',
      doi: 'https://doi.org/10.3389/fvets.2026.1739779',
    },
    {
      year: 2026, cofirst: 2,
      title: 'Black-tailed Gull (<i>Larus crassirostris</i>): A Novel Host for <i>Trichomonas gypaetinii</i> with High Prevalence of Avian Trichomonads in South Korea',
      authors: 'Kim J, Son Y, Hwang B, Kim Y, Kim J, Min W, Kim WH',
      venue: '<em>Journal of Wildlife Diseases</em>, 62(1), 192–197',
      doi: 'https://doi.org/10.7589/JWD-D-25-00039',
    },
    {
      year: 2025, cofirst: 0,
      title: 'An <i>rpoB</i> Sequence Type Network as a Framework for the Evolutionary Investigation of <i>Clostridium perfringens</i>',
      authors: 'Ahn SM, Son S, Son Y, Lim SJ, Kim D, Choi KS, Kwon HJ',
      venue: '<em>Microorganisms</em>, 13(12), 2768',
      doi: 'https://doi.org/10.3390/microorganisms13122768',
    },
    {
      year: 2025, cofirst: 0,
      title: 'Discovery, phylogenetic, and comparative genomic analysis of novel avian gammacoronaviruses identified in feral pigeons (<i>Columba livia domestica</i>)',
      authors: 'El Zowalaty ME, Taylor LJ, Son Y, Lee H, Rubrum AM, Webby RJ, Bustin SA, Young SG, Lee S-H, Lee D-H, Frieman MB',
      venue: '<em>Journal of Virology</em>, 99(9), e01112-25',
      doi: 'https://doi.org/10.1128/jvi.01112-25',
    },
    {
      year: 2024, cofirst: 2,
      title: 'Comparative Analysis of Antibiotic Resistance and Biofilm Characteristics of Two Major <i>Enterococcus</i> Species from Poultry Slaughterhouses in South Korea',
      authors: 'Son Y, Jin YB, Cho EJ, Park AR, Flores RA, Nguyen TB, Lee SY, Altanzul B, Park KI, Min W, Kim WH',
      venue: '<em>Veterinary Sciences</em>, 11(4), 180',
      doi: 'https://doi.org/10.3390/vetsci11040180',
    },
    {
      year: 2024, cofirst: 0,
      title: 'Genetic Characterization and Phylogeographic Analysis of the First H13N6 Avian Influenza Virus Isolated from Vega Gull in South Korea',
      authors: 'Flores RA, Cammayo-Fletcher PLT, Nguyen BT, Villavicencio AGM, Lee SY, Son Y, Kim JH, Park KI, Yoo WG, Jin YB, Min W, Kim WH',
      venue: '<em>Viruses</em>, 16(2), 285',
      doi: 'https://doi.org/10.3390/v16020285',
    },
    {
      year: 2023, cofirst: 2,
      title: 'The prevalence of viral diseases in wild boars (<i>Sus scrofa</i>) in Gyeongsangnam-do, South Korea',
      authors: 'Kim CH, Son Y, Choi YJ, Ko BH, Kang WH, Kim GA, Lee S, Kim WH',
      venue: '<em>Korean Journal of Veterinary Service</em>, 46(1), 59–66',
      doi: 'https://doi.org/10.7853/kjvs.2023.46.1.59',
    },
    {
      year: 2022, cofirst: 2,
      title: 'Prevalence study of bovine viral diarrhea virus (BVDV) from cattle farms in Gyeongsangnam-do, South Korea in 2021',
      authors: 'Son Y, Cho S, Ji JM, Cho JK, Bang SY, Choi YJ, Kim CH, Kim WH',
      venue: '<em>Korean Journal of Veterinary Service</em>, 45(3), 211–219',
      doi: 'https://doi.org/10.7853/kjvs.2022.45.3.211',
    },
  ];

  /* ---------------- Helpers ---------------- */
  const $ = (s, el = document) => el.querySelector(s);
  // Keep each author's surname and initials on one line.
  const nbsp = (s) => s.split(', ').map((a) => a.replace(/ /g, ' ')).join(', ');
  // Only the first "Son Y" is me; a later one is a different author.
  const boldMe = (s) => nbsp(s).replace(nbsp(ME), '<strong>' + nbsp(ME) + '</strong>');
  // cofirst is how many leading authors share first authorship; each gets an asterisk.
  const starCofirst = (s, n) =>
    n ? s.split(', ').map((a, i) => (i < n ? a + '*' : a)).join(', ') : s;

  /* ---------------- Publications ---------------- */
  const pubsList = $('#pubs-list');
  if (pubsList) {
    let lastYear = null;
    PUBLICATIONS.forEach((p) => {
      const li = document.createElement('li');
      li.className = 'entry';
      li.innerHTML =
        '<p class="entry__when">' + (p.year !== lastYear ? p.year : '') + '</p>' +
        '<p class="entry__what cite">' +
        boldMe(starCofirst(p.authors, p.cofirst)) + '. <span class="cite__title">' + p.title + '</span>. ' + p.venue + '.' +
        (p.doi ? ' <a href="' + p.doi + '" target="_blank" rel="noopener">' + p.doi.replace('https://doi.org/', 'doi:') + '</a>' : '') + '</p>' +
        (p.cofirst ? '<p class="entry__note">*Equal contribution</p>' : '');
      lastYear = p.year;
      pubsList.appendChild(li);
    });
  }

  /* ---------------- Footer year ---------------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
