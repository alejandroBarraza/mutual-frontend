import { render } from "@testing-library/react"
import { Form } from '../../components/form/Form'
describe('test in <Form /> component', () => {

   test('renders loaded correctly', () => {
      const { container } = render(<Form />)
      expect(container).toMatchSnapshot();
   })
})