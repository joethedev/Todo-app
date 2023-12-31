import Container from "react-bootstrap/Container";
import { Button, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
    <>
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">BUDGIFY</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", 
          alignItems: "flex-start"
        }}
      >
        <BudgetCard name="Food" gray amount={1001} max={1000} />
      </div>
    </Container>
    <AddBudgetModal show/>
    </>
  );
}

export default App;
