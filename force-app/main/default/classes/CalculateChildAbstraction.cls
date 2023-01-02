public class CalculateChildAbstraction extends CalculateParentAbstraction{
	Double amount = 0.1;
    
    //It is not possible to direcly access this method by Child's object instantiation(which is nothing but abstraction)
    Protected override void calculateAmount(Integer count){
        System.debug('Calculated amount is - '+amount * count);
    }
}