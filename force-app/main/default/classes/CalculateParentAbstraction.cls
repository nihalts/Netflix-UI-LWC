public abstract class CalculateParentAbstraction {
    Double amount = 0.1;
    
    public void updateInventory(){
        System.debug('Updating inventory by makeing callouts/integrations');
    }
    
    //Giving cline to construct thier own functionality for calculateAmount
    abstract protected void calculateAmount(Integer count);
    
    public void purchase(Integer count){
        updateInventory();
        calculateAmount(count);
    }
}