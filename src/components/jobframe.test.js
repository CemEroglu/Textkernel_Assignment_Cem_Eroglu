import { render, screen } from '@testing-library/react';
import JobFrame from './jobframe';

test("Is Job title correct?", ()=>{
    const{debug, container} = render(<JobFrame job_title="Developer" location_coordinates={["44.764732361","-93.359115601"]}/>)
    expect(container.firstChild).toHaveTextContent('Developer')
    //screen.debug
})
test("Is ClassName correct?", ()=>{
    const{debug, container} = render(<JobFrame job_title="Engineer" location_coordinates={["38.764732361","-46.359115601"]}/>)
    expect(container.firstChild).toHaveClass("frame")
})
test("Missing Organization name corrected?", ()=>{
    const{debug, container} = render(<JobFrame job_title="dentist" location_coordinates={["64.764732361","33.359115601"]}/>)
    expect(container.firstChild).toHaveTextContent("🏢 Unkown")
})