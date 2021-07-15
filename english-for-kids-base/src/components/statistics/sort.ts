import { renderStatisticTable } from "./stat-table";

const setDownSort = (target: HTMLElement) => {
  target.classList.remove('up');
  target.classList.add('down');
}

const setUpSort = (target: HTMLElement) => {
  const statHeader = document.getElementById('statHeader');

  const statItems = statHeader?.getElementsByClassName('stat-word-item') as HTMLCollection;

  [...statItems].forEach(item => {
    item.classList.remove('up');
    item.classList.remove('down');
  });

  target.classList.add('up');
}

export const sortStat = (): void => {
  const statHeader = document.getElementById('statHeader');

  statHeader?.addEventListener('click', (event: Event) => {
    const target = event.target as HTMLElement;
    const statItem = 'stat-word-item';

    if(target.classList.contains(statItem)) {

      if(target.classList.contains('up')) {
        setDownSort(target);
        renderStatisticTable('down', target.dataset.sort);
      } else {
        setUpSort(target);
        renderStatisticTable('up', target.dataset.sort);
      }
    }
  })
}