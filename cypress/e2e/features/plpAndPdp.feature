Feature: SwagLabs | PLP PDP | Remover productos del SCP desde el PLP y PDP

    Background: User is logged with one or more products add to the SCP.
        Given User visit www.saucedemo.com
        When User login enters username as 'standard_user', password as 'secret_sauce' and clicks on button login
        And User added one or more products to the SCP
        Then User confirm the products added in icon SCP
 
    Scenario: TC1: Validate remove one product of the SCP from PLP.
        Given User is in Product list page            
        When User clicks on button remove of the PLP of one previously selected product
        Then Should one product removed of the PLP

    Scenario: TC2: Validate remove more than one product of the SCP from PLP.
        Given User is in product List page
        When User clicks on button remove of the PLP of more than one previously selected product
        Then Should more than one product removed of the PLP
    
    Scenario: TC3: Validate remove one product of the SCP from PDP.
        When User clicks on button remove of the PDP of one previously selected product
        Then Should one product removed of the PDP

    Scenario: TC4: Validate remove more than one product of the SCP from PDP.
        When User clicks on button remove of the PDP more than one previously selected product
        Then Should more than one product removed of the PDP
        
    Scenario: TC5: Validate remove all products of the SCP from PLP.
        Given User is in Product list Page            
        When User clicks on button remove of the PLP of all previously selected products
        Then Should all products removed of the PLP

    Scenario: TC6: Validate remove all products of the SCP from PDP.
        When User clicks on button remove of the PDP of all previously selected products
        Then Should all products removed of the PDP

   

  