# SASS (grid - pc/laptop first), jQuery, [browser-sync](https://www.browsersync.io/docs/gulp/).

Ten template pozwala nam na kompilacje SASS bez potrzeby kopiowania pliku *node_modules* do folderu projektu za kazdym razem, wystarczy miec go w jednym miejscu.

**Grid** jest zrobiony dla **pc/laptop first**, bo pewnie tak latwiej jest nam na tym etapie planowac projekty, maksymalna szerokosc grid-container jest ustawiona na 1400px (`./sass/partials/grid.scss` , **linia 8**).

**Browser-sync** powoduje, ze po kazdym:
  - Zapisaniu pliku html;
  - Zapisaniu pliku scss;

odświeza sie nasza przegladarka. W przypadku duzych stron (ktore beda przeladowywaly sie dluzej) polecam **doczytac** dodatkowe opcje [browser-sync](https://www.browsersync.io/docs/gulp/).
Ogolne podziekowania za browser-sync dla [Natalii](https://github.com/nmkedziora) , pol litra sie chlodzi.

**Aby zaczac nowy projekt**, wystarczy jednorazowo zrobic fork tego repozytorium, po czym sklonowac je do swojej sciezki *~/workspace*. Do nastepnych projektow najlepiej jest zostawic sobie folder template (dzieki temu latwiej tworzy sie repo do projektu na github'ie i w przypadku gdybym zaktualizowal te repo mozecie je w latwy sposob fetch'owac) i kopiowac go z kazdym nowym projektem, zamiast klonowac.

## Czynności jednorazowe:

1. Wchodzimy do naszego folderu *~/workspace*;
2. Kopiujemy plik *node_modules* z ktoregokolwiek folderu z kursu;
3. Wklejamy plik *node_modules* bezposrednio do sciezki *~/workspace*;
4. Poprzez GitBash / terminal wchodzimy do *~/workspace*;
5. Wpisujemy `npm install browser-sync gulp --save-dev` , czekamy az sie pobierze i bedziemy mogli ponownie wpisywac cos do GitBash / terminal'u.
6. Jezeli nie chcemy commit'owac folderu SASS, dodajemy `./sass` do pliku ./.gitignore.

## Obsluga template;

1. Kopiujemy folder template, wklejamy w *~/workspace* i **zmieniamy mu nazwe na nazwe naszego projektu**.
2. Uruchomienie browser-sync: `./gulpfile.js` , **linia 1**. Nalezy zmienna `projectName` przyrownac do **nazwy naszego projektu - folderu w ktorym jestesmy, ktorego nazwe zmienilismy punkt wyzej** (default: 'template'); Ze sciezki *~/workspace/nazwaProjektu* wywolujemy `gulp default`. W przypadku `syntax error` nalezy wywolac ponownie w konsoli polecenie `gulp default`.

3. Zmiana ilości kolumn dla grid'u: `./sass/partials/grid.scss` **linia 1**, zmiana wartosci zmiennej `$columns_amount`.

4. [Przykladowe](http://stackoverflow.com/questions/20301680/responsive-design-standard-breakpoint-media-queries-for-smartphone-and-tablet) breakpointy dla grid'u: `./sass/partials/grid.scss` , **linie 23 - 55**. Odkomentowujemy te, ktore chcemy definiowac.

5. W pliku `./sass/modules/media-queries.scss` skorzystalem z [tej strony](http://dev.bowdenweb.com/a/css/media-queries-boilerplate.css)

6. Sprawdzcie dokladnie co jest w folderach:
  - `./sass/modules/text-variables.scss`;
  - `./sass/modules/media-queries.scss`;
  - `./sass/partials/grid.scss`;

**Pozostale pliki sa opcjonalne**, jesli czegos nie potrzebujecie i widzicie w tym burdel, to smialo usuwajcie i robcie wlasne, to ze ten uklad jest wygodny i logiczny dla mnie nie znaczy, ze dla Was tez musi byc. **Pamietajcie** tylko, zeby pozniej usunac `@import` tego, co usuneliscie, z plikow `./sass/modules/all.scss` oraz `./sass/partials/layout.scss`, bo wyskocza wam bledy przy kompilacji SASS.
