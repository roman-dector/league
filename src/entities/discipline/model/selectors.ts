export const disciplines = (state: RootState) =>
  state.discipline.disciplines
export const loading = (state: RootState) => state.discipline.loading
export const disciplineTitle = (id: string) => (state: RootState) =>
  state.discipline.disciplines.find(d => d.id === id)?.name || ''
