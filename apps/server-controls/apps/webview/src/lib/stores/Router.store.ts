import { writable } from 'svelte/store';

// Importing screens
import ChooseScreen from '../../screens/ChooseScreen.svelte';
import ServerControls from '../../screens/ServerControls/index.svelte';
import Statistics from '../../screens/Statistics/index.svelte';

// Icons for screen's meta info
import { DesktopComputer } from '@steeze-ui/heroicons';

// Interface
interface IRouterScreen {
  id: string,
  component: Object,
  meta?: Partial<{
    label: string,
    icon: any,
    isDisplayed: boolean,
  }>,
};

// Screens information
const screens: Array<IRouterScreen> = [
  {
    id: 'ChooseScreen',
    component: ChooseScreen,
    meta: {
      isDisplayed: false,
    }
  },
  {
    id: 'ServerControls',
    component: ServerControls,
    meta: {
      label: 'Управление сервером',
      icon: DesktopComputer,
      isDisplayed: true,
    }
  },
  {
    id: 'Statistics',
    component: Statistics,
    meta: {
      label: 'Статистика хоста',
      icon: DesktopComputer,
      isDisplayed: true,
    }
  },
];

// Store interface
export interface IRouterStore {
  screens: Array<IRouterScreen>,
  currentScreen: string,
};

// Function, that'll initialize our store
function _initialize() {
  const { subscribe, update } = writable<IRouterStore>({ 
    screens, 
    currentScreen: "ChooseScreen" 
  });

  return {
    subscribe,

    // setScreen method
    setScreen(screenId: string) {
      if (screens.find((screen) => screen.id == screenId)) {
        // Updating
        update((object) => {
          object.currentScreen = screenId;

          return object;
        });
      };
    },

    // resetScreen method
    resetScreen() {
      update((object) => {
        object.currentScreen = "ChooseScreen";

        return object;
      });
    },
  };
};

export const RouterStore = _initialize();