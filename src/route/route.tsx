import App from "../App";
import FormPage from "../page/form-page";
import FormPages from "../page/frompages/form-page-all";
import FirstPage from "../page/pages/page1";
import SecondPage from "../page/pages/page2";
import LastPage from "../page/pages/page3";
import ResultsPage from "../page/resultspage/results-page";

export const route = [
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
                element: <FormPage />

            },
            {
                path: 'form',
                element: <FormPages />,
                children: [
                    {
                        path: '1',
                        element: <FirstPage />
                    },
                    {
                        path: '2',
                        element: <SecondPage />
                    },
                    {
                        path: '3',
                        element: <LastPage />
                    },
                    {
                        path: 'resultats',
                        element: <ResultsPage />
                    },
                ]
            }

        ]
    }
]