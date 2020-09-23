import { of } from 'rxjs'

export const mockApiCallerService = {
  createApiResults: jest.fn().mockReturnValue({ data$: of(), loading$: of(false) }),
  callApi: jest.fn(),
}
export const mockMatDialog = {}
export const mockMatDialogRef = {}
