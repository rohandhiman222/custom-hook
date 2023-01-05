flex-grow = 0; // nothing happen
flex-grow = 1; mean equal all

flex-grow apply only inside flex
.item apply here

```css
.container {
  display: flex;
}

/* jo space khali  vo sab fil kar denga */
.items {
  flex-grow: 1;
}

/* this item take only three time space  */
.itemInvisiable {
  flex-grow: 3;
}

.container {
  display: grit;
  /* auto mean second column auto increase size */
  grid-template-columns: 100px auto 100px;
  grid-template-rows: 50px 50px;
  grid-gap: 3px;
}

.container {
  display: grit;
  /* auto mean second column auto increase size */
  /* two column right now */
  grid-template-columns: 100px auto;
  /* three row */
  grid-template-rows: 50px 50px 200px;
  grid-gap: 3px;
}

.container {
  display: grit;
  /* auto mean second column auto increase size */
  /* three column each size */
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* always take two size second column*/
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* another way right */
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: 50px 50px; */
  grid-template-rows:repeat(2, 50px)
  grid-gap: 3px;
}


/* short hand */

.container {
  display: grid;
  /* first row second column */
  grid-template: repeat(2, 50px) / repeat(3, 1fr);
  grid-gap: 3px;
}


.header {
    grid-column-start:1;
    /* end 3 mean count line first line second line end line */
    grid-column-end:3;
}

/* shorthand */

.header {
    /* grid-column:1/3; */
    /* same thing above */
    /* grid-column:1/ span 2; */
    /* if we don't have many column we have */
    grid-column:1/ -1;
}

/* design  */

.container {
    display:grid;
    grid-gap:3px;
    grid-template-columns:1fr 4fr;
    grid-template-rows:20px 200px 40px;
}

/* best way */


.container {
    display:grid;
    grid-gap:3px;
    grid-template-columns:12fr fr;
    grid-template-rows:20px 200px 40px;
}

.header {
    grid-column: 1 / -1;
}
 .content{
    grid-columns: 2/ -1;
}

.footer {
    grid-column: 1 / -1;
}

/* admin */


.container {
    display:grid;
    grid-gap:3px;
    grid-template-columns:12fr fr;
    grid-template-rows:20px 200px 40px;
}

.header {
    grid-column: 2 / -1;
}

.menu {
    grid-row: 1 / 3;
}

 .content{
    grid-columns: 2/ -1;
}

.footer {
    grid-column: 1 / -1;
}


/* auto */

.container {
    display:grid;
    grid-gap:5px;
    /* grid-template-columns:repeat(6, 1fr); */
    /* auto fit will no increase decrease size */
    /* grid-template-columns:repeat(auto-fit, 1fr); */
    grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
    /* grid-template-rows:repeat(2, 100px) */
    grid-template-rows:100px 100px;
    grid-auto-rows:100px;
}
```
