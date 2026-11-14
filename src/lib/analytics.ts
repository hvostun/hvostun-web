/**
 * Яндекс Метрика: счетчик «Хвостун» (hvostun.com).
 * Грузится только на опубликованной сборке; при локальной разработке выключен,
 * чтобы тестовые заходы не попадали в статистику. VITE_YM_COUNTER_ID переопределяет номер.
 * TODO: дополнить политику /privacy пунктом о cookie и Яндекс Метрике.
 */
const DEFAULT_COUNTER_ID = 114224216;

export const YM_COUNTER_ID = Number(
  import.meta.env["VITE_YM_COUNTER_ID"] || (import.meta.env.PROD ? DEFAULT_COUNTER_ID : 0),
);

/** Код инициализации счетчика для <head> */
export function metrikaInitScript(id: number) {
  return `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${id},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});`;
}
