public class ImplementPrice_InterfaceAbstraction implements PriceContract_InterfaceAbstraction{

    //implementing the interface method of Parent interface
    public Double calculateAmount(Integer count, Double pricePerUnit){
        System.debug('calculated price total - '+count * pricePerUnit);
        return count * pricePerUnit;
    }
}