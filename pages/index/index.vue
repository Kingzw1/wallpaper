<template>
	<view class="homeLayout pageBg">
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" autoplay circular>
				<swiper-item v-for="item in 3">
					<image src="../../common/images/banner1.jpg" alt="" mode="aspectFill"/>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in 4">
						<text>文字内容萨达啊实打实大阿萨法十大啊尬撒大大的asda打打</text>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="16" color="#333"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>
					每日推荐
				</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18" color="#28b389"></uni-icons>
						<uni-dateformat :date="Date.now()" format="dd日" style="color: #28b389;"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true" >
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>
					专题精选
				</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
	</view>
</template>

<script setup>
	// import UniIcons from '@dcloudio/uni-ui/lib/uni-icons/uni-icons.vue'
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			min-width: 750rpx;
			// margin: 0 auto;
			padding: 30rpx 0;
			swiper{
				min-width: 750rpx;
				height: 340rpx;
				swiper-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
					}
				}
			}
		}
		.notice{
			min-width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background-color: #f9f9f9;
			// margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					color:$brand-theme-color ;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex: 1;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
						text-overflow: ellipsis;
						text{
							white-space: nowrap;
						}
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.select{
			padding-top: 50rpx;
			.content{
				min-width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 12rpx;
						}
					}
					.box:last-child{margin-right: 30rpx;}
				}
			}
		}
		.theme{
			padding: 50rpx 0;
			.more{
				font-size: 32rpx;
				color:#888
			}
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3,1fr);
			}
		}
	}
	
</style>
