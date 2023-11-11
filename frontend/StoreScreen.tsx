import {useEffect, useState} from "react";
import {
    Dimensions,
    FlatList, Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import BundleItem from "./components/BundleItem";
import Colors from "../userSettings";

const tempBundleData = [
    {
        "ID": "bae191f1-8973-4c33-800a-f62b6d4bc2fe",
        "DataAssetID": "f79f85ec-48f8-6573-873a-75b4627b615e",
        "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
        "Items": [
            {
                "Item": {
                    "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                    "ItemID": "d73e705a-4231-f139-293e-0abe4bde559c",
                    "Amount": 2
                },
                "BasePrice": 475,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 1,
                "DiscountedPrice": 0,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                    "ItemID": "8de9de55-4e26-94e4-bdba-d790b1bd9b34",
                    "Amount": 1
                },
                "BasePrice": 375,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 1,
                "DiscountedPrice": 0,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                    "ItemID": "3baa428b-4e8e-df38-e50f-1e86f2f9584f",
                    "Amount": 1
                },
                "BasePrice": 325,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 1,
                "DiscountedPrice": 0,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                    "ItemID": "6ab209eb-4596-c1f5-0262-22ac9f2beaa0",
                    "Amount": 1
                },
                "BasePrice": 1775,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 0,
                "DiscountedPrice": 1775,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                    "ItemID": "c8931118-40b7-dfb6-c071-85be21d51b4d",
                    "Amount": 1
                },
                "BasePrice": 1775,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 0,
                "DiscountedPrice": 1775,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                    "ItemID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                    "Amount": 1
                },
                "BasePrice": 1775,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 0,
                "DiscountedPrice": 1775,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                    "ItemID": "a7ec8cbf-499b-31cc-d58f-a2a900d7239c",
                    "Amount": 1
                },
                "BasePrice": 1775,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 0,
                "DiscountedPrice": 1775,
                "IsPromoItem": false
            },
            {
                "Item": {
                    "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                    "ItemID": "dd587e30-4932-6cd4-3437-a1a043dd6a78",
                    "Amount": 1
                },
                "BasePrice": 4350,
                "CurrencyID": "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741",
                "DiscountPercent": 1,
                "DiscountedPrice": 0,
                "IsPromoItem": false
            }
        ],
        "ItemOffers": [
            {
                "BundleItemOfferID": "d73e705a-4231-f139-293e-0abe4bde559c",
                "Offer": {
                    "OfferID": "d73e705a-4231-f139-293e-0abe4bde559c",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 475
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "dd3bf334-87f3-40bd-b043-682a57a8dc3a",
                            "ItemID": "d73e705a-4231-f139-293e-0abe4bde559c",
                            "Quantity": 2
                        }
                    ]
                },
                "DiscountPercent": 1,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                }
            },
            {
                "BundleItemOfferID": "8de9de55-4e26-94e4-bdba-d790b1bd9b34",
                "Offer": {
                    "OfferID": "8de9de55-4e26-94e4-bdba-d790b1bd9b34",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 375
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "3f296c07-64c3-494c-923b-fe692a4fa1bd",
                            "ItemID": "8de9de55-4e26-94e4-bdba-d790b1bd9b34",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 1,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                }
            },
            {
                "BundleItemOfferID": "3baa428b-4e8e-df38-e50f-1e86f2f9584f",
                "Offer": {
                    "OfferID": "3baa428b-4e8e-df38-e50f-1e86f2f9584f",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 325
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "d5f120f8-ff8c-4aac-92ea-f2b5acbe9475",
                            "ItemID": "3baa428b-4e8e-df38-e50f-1e86f2f9584f",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 1,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                }
            },
            {
                "BundleItemOfferID": "6ab209eb-4596-c1f5-0262-22ac9f2beaa0",
                "Offer": {
                    "OfferID": "6ab209eb-4596-c1f5-0262-22ac9f2beaa0",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "6ab209eb-4596-c1f5-0262-22ac9f2beaa0",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 0,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                }
            },
            {
                "BundleItemOfferID": "c8931118-40b7-dfb6-c071-85be21d51b4d",
                "Offer": {
                    "OfferID": "c8931118-40b7-dfb6-c071-85be21d51b4d",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "c8931118-40b7-dfb6-c071-85be21d51b4d",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 0,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                }
            },
            {
                "BundleItemOfferID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                "Offer": {
                    "OfferID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "604fa485-43ba-0fcf-4bad-f9a4e3b6c652",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 0,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                }
            },
            {
                "BundleItemOfferID": "a7ec8cbf-499b-31cc-d58f-a2a900d7239c",
                "Offer": {
                    "OfferID": "a7ec8cbf-499b-31cc-d58f-a2a900d7239c",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "a7ec8cbf-499b-31cc-d58f-a2a900d7239c",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 0,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
                }
            },
            {
                "BundleItemOfferID": "dd587e30-4932-6cd4-3437-a1a043dd6a78",
                "Offer": {
                    "OfferID": "dd587e30-4932-6cd4-3437-a1a043dd6a78",
                    "IsDirectPurchase": true,
                    "StartDate": "0001-01-01T00:00:00Z",
                    "Cost": {
                        "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 4350
                    },
                    "Rewards": [
                        {
                            "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                            "ItemID": "dd587e30-4932-6cd4-3437-a1a043dd6a78",
                            "Quantity": 1
                        }
                    ]
                },
                "DiscountPercent": 1,
                "DiscountedCost": {
                    "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 0
                }
            }
        ],
        "TotalBaseCost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 12625
        },
        "TotalDiscountedCost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 7100
        },
        "TotalDiscountPercent": 0.438,
        "DurationRemainingInSeconds": 379623,
        "WholesaleOnly": false
    },
]

const tempFeaturedItemsData = [
    {
        "OfferID": "613dd54a-4068-0fab-7670-bf8268a9b76b",
        "IsDirectPurchase": true,
        "StartDate": "2023-11-10T12:32:56.241630465Z",
        "Cost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1775
        },
        "Rewards": [
            {
                "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                "ItemID": "613dd54a-4068-0fab-7670-bf8268a9b76b",
                "Quantity": 1
            }
        ]
    },
    {
        "OfferID": "30de237a-4fb3-90f5-3630-65be64d01423",
        "IsDirectPurchase": true,
        "StartDate": "2023-11-10T12:32:56.2416379Z",
        "Cost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 3550
        },
        "Rewards": [
            {
                "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                "ItemID": "30de237a-4fb3-90f5-3630-65be64d01423",
                "Quantity": 1
            }
        ]
    },
    {
        "OfferID": "f48b4fa1-41d5-085f-4d0c-f3a1f9555cc9",
        "IsDirectPurchase": true,
        "StartDate": "2023-11-10T12:32:56.241682592Z",
        "Cost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 875
        },
        "Rewards": [
            {
                "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                "ItemID": "f48b4fa1-41d5-085f-4d0c-f3a1f9555cc9",
                "Quantity": 1
            }
        ]
    },
    {
        "OfferID": "00eb5b5b-4697-44b5-a926-7e86b730e812",
        "IsDirectPurchase": true,
        "StartDate": "2023-11-10T12:32:56.241639899Z",
        "Cost": {
            "85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741": 1275
        },
        "Rewards": [
            {
                "ItemTypeID": "e7c63390-eda7-46e0-bb7a-a6abdacd2433",
                "ItemID": "00eb5b5b-4697-44b5-a926-7e86b730e812",
                "Quantity": 1
            }
        ]
    }
]

export default function StoreScreen() {
    const screenWidth = Dimensions.get('window').width;
    const [showWeaponScreen, setShowWeaponScreen] = useState(false);
    const [chosenWeaponObject, setChosenWeaponObject] = useState(null);
    const [showNightmarket, setShowNightmarket] = useState(false);
    const [activeBundleIndex, setActiveBundleIndex] = useState(0);

    const [isFeaturedPageActive, setIsFeaturedPageActive] = useState(true);
    const isNightmarketActive = false; // TODO
    const playerCurrencyR = 320; // TODO
    const playerCurrencyVP = 51234; // TODO
    const playerCurrencyKP = 10000; // TODO

    const now = new Date();
    const midnight = new Date(now);
    midnight.setUTCHours(0,0,0,0);
    midnight.setUTCDate(now.getUTCDate() + 1);
    const timeDiff = midnight.getTime() - now.getTime();
    const [timeUntilStoreReset, setTimeUntilStoreReset] = useState(timeDiff / 1000);

    function formatTime(seconds:number) {
        const hours = Math.floor(seconds / 60 / 60);
        const minutes = Math.floor(seconds / 60 % 60);
        const remainingSeconds = Math.floor(seconds % 60);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    const handleBundleCarouselScroll = (event:any) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = scrollPosition / screenWidth;
        setActiveBundleIndex(Math.round(index))
    }
    const renderDotIndicators = () => {
        return(
            tempBundleData.map((dot, index:number) => {
                const indicatorColor = activeBundleIndex === index ? 'rgba(255,255,255,.5)' : 'rgba(255,255,255,.2)';
                return <View style={[styles.dotIndicator, {backgroundColor: indicatorColor}]} key={index} />;
            })
        );
    }

    const renderFooter = () => {
        return(
            <View style={styles.footer}>
                {isFeaturedPageActive && (
                    <View style={styles.playerCurrencyContainer}>
                        <View style={styles.currency}>
                            <Image source={require('../assets/currencies/currencyR.png')} style={styles.currencyImage} />
                            <Text style={styles.currencyText}>{playerCurrencyR}</Text>
                        </View>
                        <View style={styles.currency}>
                            <Image source={require('../assets/currencies/currencyVP.png')} style={styles.currencyImage} />
                            <Text style={styles.currencyText}>{playerCurrencyVP}</Text>
                        </View>
                    </View>
                )}

                {!isFeaturedPageActive && (
                    <View style={styles.playerCurrencyContainer}>
                        <View style={styles.currency}>
                            <Image style={styles.currencyImage}
                                   source={require('../assets/currencies/currencyKP.png')}/>
                            <Text style={[styles.currencyText, {color: playerCurrencyKP >= 10000 ? 'red' : Colors.textPrimary}]}>{playerCurrencyKP}</Text>
                        </View>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.changeFeaturedPageButton}
                    onPress={() => {setIsFeaturedPageActive(!isFeaturedPageActive); setShowNightmarket(false)}}>
                    <Text style={styles.changeFeaturedPageButtonText}>{isFeaturedPageActive ? "Accessories" : "Featured"}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    useEffect(() => {
        const oneSecondInterval = setInterval(() => {
           if(timeUntilStoreReset > 0) setTimeUntilStoreReset(timeUntilStoreReset-1);
        }, 1000);

        return () => clearInterval(oneSecondInterval);
    }, [timeUntilStoreReset]);

    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <View>
                    <FlatList
                        data={tempBundleData}
                        renderItem={BundleItem}
                        horizontal={true}
                        pagingEnabled={true}
                        onScroll={handleBundleCarouselScroll}
                        showsHorizontalScrollIndicator={false}
                    />
                    {tempBundleData.length > 1 && <View style={styles.bundlesIndicator}>{renderDotIndicators()}</View>}
                </View>
                <Text style={styles.timeUntilStoreReset}>Daily Offers | <Text style={{color: Colors.accent}}>{formatTime(timeUntilStoreReset)}</Text></Text>
                <View style={styles.itemsContainer}></View>
                {renderFooter()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundPrimary,
    },
    dotIndicator: {
        height: 8,
        width: 8,
        borderRadius: 10,
        marginHorizontal: 3,
    },
    bundlesIndicator: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: 4,
        left: 4,
    },
    timeUntilStoreReset: {
        fontSize: 16,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginTop: 8,
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 8,
        gap: 4,
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 64,
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-between',
    },
    playerCurrencyContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: 4,
    },
    currency: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    currencyImage: {
        width: 22,
        height: 22,
    },
    currencyText: {
        fontSize: 16,
        color: Colors.textPrimary,
    },
    changeFeaturedPageButton: {
        width: 156,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: 'rgba(0,0,0,.25)',
    },
    changeFeaturedPageButtonText: {
        fontSize: 16,
        color: Colors.textPrimary,
    },
});