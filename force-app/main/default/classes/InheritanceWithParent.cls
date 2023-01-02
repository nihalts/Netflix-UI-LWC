public virtual class InheritanceWithParent {
	protected Double amount;
    
    static{
        System.debug('This is Static block');
    }
    
    public InheritanceWithParent(){
        amount = 10;
        System.debug('This is default constructor'+amount);
    }
    
    public InheritanceWithParent(Double amount){
        this.amount = amount;
        System.debug('This is Parameterised constructor'+amount);
    }
    
    public virtual Double calculateAmount(Integer count){
        System.debug('calculateAmount'+ (amount * count));
        return (amount * count);
    }
}